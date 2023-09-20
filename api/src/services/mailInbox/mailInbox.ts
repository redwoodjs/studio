import { desc, eq } from 'drizzle-orm'
import type { QueryResolvers } from 'types/graphql'

import { UserInputError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/drizzle/db'
import {
  mailInboxEntryTable,
  type MailInboxEntry,
} from 'src/lib/drizzle/schema'

export const mailInboxEntries: QueryResolvers['mailInboxEntries'] = async ({
  source,
}) => {
  if (source !== 'SMTP' && source !== 'API') {
    throw new UserInputError(`Invalid source: "${source}"`)
  }

  return db
    .select()
    .from(mailInboxEntryTable)
    .where(eq(mailInboxEntryTable.source, source as MailInboxEntry['source']))
    .orderBy(desc(mailInboxEntryTable.createdAt))
    .all()
}
