import { asc, eq, notInArray } from 'drizzle-orm'
import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import {
  type LiveQueryStorageMechanism,
  liveQueryStore,
} from '@redwoodjs/realtime'

import { db } from 'src/lib/drizzle/db'
import { mailRendererTable } from 'src/lib/drizzle/schema'
import { getUserProjectMailer } from 'src/util/project'

export const mailRenderers: QueryResolvers['mailRenderers'] = () => {
  return db
    .select()
    .from(mailRendererTable)
    .orderBy(asc(mailRendererTable.key))
    .all()
}

export const resyncMailRenderers: MutationResolvers['resyncMailRenderers'] =
  async (_, ctx) => {
    try {
      const mailer = await getUserProjectMailer()
      if (mailer === null) {
        return true
      }

      const rendererKeys = Object.keys(mailer.renderers)
      const defaultRendererKey = mailer.config.rendering.default

      // Upsert all renderers provided by the mailer
      const ids: string[] = []
      for (let i = 0; i < rendererKeys.length; i++) {
        const existingRenderer = db
          .select({
            id: mailRendererTable.id,
          })
          .from(mailRendererTable)
          .where(eq(mailRendererTable.key, rendererKeys[i]))
          .get()

        // If the renderer doesn't exist, create it
        if (existingRenderer === undefined) {
          const returned = db
            .insert(mailRendererTable)
            .values({
              key: rendererKeys[i],
              isDefault: rendererKeys[i] === defaultRendererKey,
            })
            .returning({
              id: mailRendererTable.id,
            })
            .get()
          if (returned.id) {
            ids.push(returned.id)
          }
          continue
        }

        // Update the renderer if it exists
        const returned = db
          .update(mailRendererTable)
          .set({
            isDefault: rendererKeys[i] === defaultRendererKey,
          })
          .where(eq(mailRendererTable.id, existingRenderer.id))
          .returning({
            id: mailRendererTable.id,
          })
          .get()
        if (returned.id) {
          ids.push(returned.id)
        }
      }

      // Clear out any renderers that are no longer in the mailer
      db.delete(mailRendererTable)
        .where(notInArray(mailRendererTable.id, ids))
        .run()

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
