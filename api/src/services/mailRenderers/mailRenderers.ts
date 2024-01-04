import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import {
  type LiveQueryStorageMechanism,
  liveQueryStore,
} from '@redwoodjs/realtime'

import { db } from 'src/lib/db'
import { getUserProjectMailer } from 'src/util/project'

export const mailRenderers: QueryResolvers['mailRenderers'] = async () => {
  return await db.mailRenderer.findMany({
    orderBy: {
      key: 'asc',
    },
  })
}

export const resyncMailRenderers: MutationResolvers['resyncMailRenderers'] =
  async (_, ctx) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mailer = (await getUserProjectMailer()) as any
      if (mailer === null) {
        return true
      }

      const rendererKeys = Object.keys(mailer.renderers)
      const defaultRendererKey = mailer.config.rendering.default

      // Upsert all renderers provided by the mailer
      const ids: string[] = []
      for (let i = 0; i < rendererKeys.length; i++) {
        const renderer = await db.mailRenderer.upsert({
          where: {
            key: rendererKeys[i],
          },
          create: {
            key: rendererKeys[i],
            isDefault: rendererKeys[i] === defaultRendererKey,
          },
          update: {
            isDefault: rendererKeys[i] === defaultRendererKey,
          },
          select: {
            id: true,
          },
        })
        ids.push(renderer.id)
      }

      // Clear out any renderers that are no longer in the mailer
      await db.mailRenderer.deleteMany({
        where: {
          NOT: {
            id: {
              in: ids,
            },
          },
        },
      })

      // Invalidate the live query
      const lqs = (ctx?.context?.liveQueryStore ??
        liveQueryStore) as LiveQueryStorageMechanism
      await lqs?.invalidate('Query.mailRenderers')
    } catch (error) {
      console.log(error)
      return false
    }
    return true
  }
