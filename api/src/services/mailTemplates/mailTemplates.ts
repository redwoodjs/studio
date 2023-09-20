import fs from 'node:fs'
import path from 'node:path'

import { parse as babelParse } from '@babel/parser'
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { and, asc, eq, notInArray } from 'drizzle-orm'
import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { SyntaxError, UserInputError } from '@redwoodjs/graphql-server'
import { resolveFile } from '@redwoodjs/project-config'
import {
  type LiveQueryStorageMechanism,
  liveQueryStore,
} from '@redwoodjs/realtime'

import { db } from 'src/lib/drizzle/db'
import {
  mailRendererTable,
  mailTemplateComponentTable,
  mailTemplateTable,
} from 'src/lib/drizzle/schema'
import { importFresh } from 'src/util/import'
import {
  getFilesInDirectory,
  getUserProjectMailer,
  getUserProjectPaths,
} from 'src/util/project'

export const mailTemplates: QueryResolvers['mailTemplates'] = async () => {
  return await db.query.mailTemplateTable.findMany({
    with: {
      components: true,
    },
    orderBy: [asc(mailTemplateTable.name)],
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

    // Extract the components from the template
    // We use the src version so things are not in anyway mutated by the build process
    const plugins = []
    if (templateSrcPath.endsWith('.tsx')) {
      plugins.push('typescript')
      plugins.push('jsx')
    } else if (templateSrcPath.endsWith('.jsx')) {
      plugins.push('jsx')
    }
    const templateAST = babelParse(fs.readFileSync(templateSrcPath, 'utf8'), {
      plugins,
      sourceType: 'unambiguous',
    })

    // Extract the components from the template
    const components = []
    traverse(templateAST, {
      ExportNamedDeclaration(path) {
        if (t.isFunctionDeclaration(path.node.declaration)) {
          // extract the name
          const name = path.node.declaration.id.name
          // extract the props
          let props: string | null = null
          if (path.node.declaration.params.length > 0) {
            // We know we only care about the first param - the component props
            const propsParam = path.node.declaration.params[0]
            if (t.isIdentifier(propsParam)) {
              props = propsParam.name
            } else if (t.isObjectPattern(propsParam)) {
              // We want a { param: ?, param2: ? } style string
              const propsForJson = {}
              propsParam.properties.forEach((prop) => {
                if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
                  propsForJson[prop.key.name] = '?'
                }
              })
              props = JSON.stringify(propsForJson, undefined, 2)
            }
          }
          components.push({ name, props })
        }
      },
    })

    const existingTemplate = db
      .select({
        id: mailTemplateTable.id,
      })
      .from(mailTemplateTable)
      .where(eq(mailTemplateTable.path, templateInProjectPathWithoutExtension))
      .get()

    let templateId = existingTemplate?.id
    if (templateId) {
      db.update(mailTemplateTable)
        .set({
          name:
            templateInProjectPathWithoutExtension.split('/').pop() ??
            templateInProjectPathWithoutExtension,
        })
        .where(eq(mailTemplateTable.id, templateId))
        .run()
    } else {
      templateId = db
        .insert(mailTemplateTable)
        .values({
          name:
            templateInProjectPathWithoutExtension.split('/').pop() ??
            templateInProjectPathWithoutExtension,
          path: templateInProjectPathWithoutExtension,
        })
        .returning({
          id: mailTemplateTable.id,
        })
        .get()?.id
    }

    const upsertedComponentIds: string[] = []
    for (let i = 0; i < components.length; i++) {
      let componentId = db
        .select({
          id: mailTemplateComponentTable.id,
        })
        .from(mailTemplateComponentTable)
        .where(
          and(
            eq(mailTemplateComponentTable.templateId, templateId),
            eq(mailTemplateComponentTable.name, components[i].name)
          )
        )
        .get()?.id

      if (componentId) {
        db.update(mailTemplateComponentTable)
          .set({
            propsPreview: components[i].props,
          })
          .where(eq(mailTemplateComponentTable.id, componentId))
          .run()
        upsertedComponentIds.push(componentId)
        continue
      }

      componentId = db
        .insert(mailTemplateComponentTable)
        .values({
          name: components[i].name,
          templateId: templateId,
          propsPreview: components[i].props,
        })
        .returning({
          id: mailTemplateComponentTable.id,
        })
        .get()?.id
      if (componentId) {
        upsertedComponentIds.push(componentId)
      }
    }

    if (upsertedComponentIds.length > 0) {
      db.delete(mailTemplateComponentTable)
        .where(
          and(
            eq(mailTemplateComponentTable.templateId, templateId),
            notInArray(mailTemplateComponentTable.id, upsertedComponentIds)
          )
        )
        .run()
    } else {
      db.delete(mailTemplateComponentTable)
        .where(eq(mailTemplateComponentTable.templateId, templateId))
        .run()
    }

    const filesInDist = getFilesInDirectory(mailDistPath)
    db.delete(mailTemplateTable)
      .where(
        notInArray(
          mailTemplateTable.path,
          filesInDist.map((file) =>
            file.substring(mailDistPath.length + 1, file.length - 3)
          )
        )
      )
      .run()

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

    const template = db
      .select({
        id: mailTemplateTable.id,
        name: mailTemplateTable.name,
        path: mailTemplateTable.path,
      })
      .from(mailTemplateTable)
      .where(eq(mailTemplateTable.id, templateId))
      .get()
    if (!template) {
      throw new UserInputError(`Could not find template with id ${templateId}`)
    }

    const component = db
      .select({
        name: mailTemplateComponentTable.name,
      })
      .from(mailTemplateComponentTable)
      .where(
        and(
          eq(mailTemplateComponentTable.id, componentId),
          eq(mailTemplateComponentTable.templateId, template.id)
        )
      )
      .get()
    if (!component) {
      throw new UserInputError(
        `Could not find component with id ${componentId} for template ${templateId}`
      )
    }

    const renderer = db
      .select({
        key: mailRendererTable.key,
      })
      .from(mailRendererTable)
      .where(eq(mailRendererTable.id, rendererId))
      .get()
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
      throw new UserInputError(
        `Could not find component ${component.name} in template ${template.name}`
      )
    }

    // Import the renderer
    const mailer = await getUserProjectMailer()
    if (!mailer) {
      throw new UserInputError(`Could not find mailer in project`)
    }

    let renderResult
    try {
      renderResult = await mailer.renderers[renderer.key].render(
        importedComponent(propsJSON),
        {} // TODO: We need a way for the user to specify the render options
      )
    } catch (error) {
      throw new SyntaxError(`Error rendering template: ${error.message}`)
    }

    return {
      id: `${templateId}:${componentId}:${rendererId}`,
      props: propsJSON,
      html: renderResult.html,
      text: renderResult.text,
    }
  }
