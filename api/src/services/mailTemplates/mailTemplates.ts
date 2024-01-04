import path from 'node:path'

import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { UserInputError } from '@redwoodjs/graphql-server'
import { resolveFile } from '@redwoodjs/project-config'
import {
  type LiveQueryStorageMechanism,
  liveQueryStore,
} from '@redwoodjs/realtime'

import { db } from 'src/lib/db'
import { extractMailComponents } from 'src/util/ast'
import { importFresh } from 'src/util/import'
import {
  getFilesInDirectory,
  getUserProjectMailer,
  getUserProjectPaths,
} from 'src/util/project'

export const mailTemplates: QueryResolvers['mailTemplates'] = async () => {
  return await db.mailTemplate.findMany({
    include: {
      components: true,
    },
    orderBy: {
      name: 'asc',
    },
  })
}

export const resyncMailTemplate: MutationResolvers['resyncMailTemplate'] =
  async ({ rawTemplateDistPath }, ctx) => {
    // Check the path exists
    const mailSrcPath = path.join(getUserProjectPaths().api.src, 'mail')
    const mailDistPath = path.join(getUserProjectPaths().api.dist, 'mail')

    const templateInProjectPathWithoutExtension = rawTemplateDistPath.substring(
      mailDistPath.length + 1,
      rawTemplateDistPath.length - 3
    )
    const templateSrcPath = resolveFile(
      path.resolve(
        path.join(mailSrcPath, templateInProjectPathWithoutExtension)
      )
    )

    // Check the template
    const templateName =
      templateInProjectPathWithoutExtension.split('/').pop() ??
      templateInProjectPathWithoutExtension
    let template = await db.mailTemplate.findUnique({
      where: {
        path: templateInProjectPathWithoutExtension,
      },
    })
    if (!template) {
      template = await db.mailTemplate.create({
        data: {
          path: templateInProjectPathWithoutExtension,
          name: templateName,
        },
      })
    }

    // Extract the components from the template
    const components = extractMailComponents(templateSrcPath)
    const upsertedIds = []
    for (const component of components) {
      let componentInDb = await db.mailTemplateComponent.findFirst({
        where: {
          AND: [
            {
              name: component.name,
            },
            {
              mailTemplateId: template.id,
            },
          ],
        },
      })
      if (!componentInDb) {
        componentInDb = await db.mailTemplateComponent.create({
          data: {
            name: component.name,
            propsTemplate: component.props,
            mailTemplateId: template.id,
          },
        })
      } else {
        await db.mailTemplateComponent.update({
          where: {
            id: componentInDb.id,
          },
          data: {
            propsTemplate: component.props,
          },
        })
      }
      upsertedIds.push(componentInDb.id)
    }

    // Delete any components that no longer exist
    await db.mailTemplateComponent.deleteMany({
      where: {
        AND: [
          {
            mailTemplateId: template.id,
          },
          {
            NOT: {
              id: {
                in: upsertedIds,
              },
            },
          },
        ],
      },
    })

    const filesInDist = getFilesInDirectory(mailDistPath)
    await db.mailTemplate.deleteMany({
      where: {
        NOT: {
          path: {
            in: filesInDist.map((file) =>
              file.substring(mailDistPath.length + 1, file.length - 3)
            ),
          },
        },
      },
    })

    // Invalidate the live query
    const lqs = (ctx?.context?.liveQueryStore ??
      liveQueryStore) as LiveQueryStorageMechanism
    await lqs?.invalidate('Query.mailTemplates')

    return true
  }

export const mailRenderedTemplate: QueryResolvers['mailRenderedTemplate'] =
  async ({ templateId, componentId, rendererId, props }) => {
    // Parse the props to JSON
    let propsJSON = {}
    try {
      propsJSON = JSON.parse(props)
    } catch (e) {
      throw new UserInputError(`Invalid props JSON`)
    }

    const template = await db.mailTemplate.findUnique({
      where: {
        id: templateId,
      },
    })
    if (!template) {
      throw new UserInputError(`Could not find template with id ${templateId}`)
    }

    const component = await db.mailTemplateComponent.findFirst({
      where: {
        AND: [
          {
            id: componentId,
          },
          {
            mailTemplateId: template.id,
          },
        ],
      },
    })
    if (!component) {
      throw new UserInputError(
        `Could not find component with id ${componentId} for template ${templateId}`
      )
    }

    const renderer = await db.mailRenderer.findUnique({
      where: {
        id: rendererId,
      },
    })
    if (!renderer) {
      throw new UserInputError(`Could not find renderer with id ${rendererId}`)
    }

    // Import the template
    const templatePath = path.join(
      getUserProjectPaths().api.dist,
      'mail',
      template.path + '.js'
    )
    const importedTemplate = await importFresh(templatePath)
    const importedComponent = importedTemplate[component.name]
    if (!importedComponent) {
      throw new Error(
        `Could not find component ${component.name} in template ${template.name}`
      )
    }

    // Import the renderer
    const mailer = await getUserProjectMailer()
    if (!mailer) {
      throw new Error(`Could not find mailer in project`)
    }

    let renderResult
    try {
      // @ts-expect-error TODO: Fix this type issue
      renderResult = await mailer.renderers[renderer.key].render(
        importedComponent(propsJSON),
        {} // TODO: We need a way for the user to specify the render options
      )
    } catch (error) {
      throw new Error(`Error rendering template: ${error.message}`)
    }

    return {
      id: `${templateId}:${componentId}:${rendererId}`,
      props: propsJSON,
      html: renderResult.html,
      text: renderResult.text,
    }
  }

export const mailComponentCount: QueryResolvers['mailComponentCount'] =
  async () => {
    return await db.mailTemplateComponent.count()
  }
