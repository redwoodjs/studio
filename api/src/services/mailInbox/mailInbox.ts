import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const mailAPIInboxEntries: QueryResolvers['mailAPIInboxEntries'] =
  async () => {
    const mail =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (await db.$queryRaw`SELECT id, api, createdAt, updatedAt FROM MailAPIInboxEntry ORDER BY createdAt DESC;`) as any[]
    return mail.map((entry) => {
      return {
        id: entry.id,
        api: JSON.parse(entry.api),
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      }
    })
  }

export const mailSMTPInboxEntries: QueryResolvers['mailSMTPInboxEntries'] =
  async () => {
    const mails =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (await db.$queryRaw`SELECT id, plaintext, html, smtp, envelope, createdAt, updatedAt FROM MailSMTPInboxEntry ORDER BY createdAt DESC;`) as any[]
    return mails.map((entry) => {
      return {
        id: entry.id,
        plaintext: entry.plaintext,
        html: entry.html,
        smtp: JSON.parse(entry.smtp),
        envelope: JSON.parse(entry.envelope),
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      }
    })
  }
