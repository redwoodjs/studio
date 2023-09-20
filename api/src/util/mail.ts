import { simpleParser as simpleMailParser } from 'mailparser'
import type { SMTPServerDataStream, SMTPServerSession } from 'smtp-server'

import { liveQueryStore } from '@redwoodjs/realtime'

import { db } from 'src/lib/drizzle/db'
import { mailInboxEntryTable } from 'src/lib/drizzle/schema'
import { logger } from 'src/lib/logger'

export function handleMail(
  stream: SMTPServerDataStream,
  session: SMTPServerSession,
  callback: (err?: Error) => void
) {
  simpleMailParser(stream, {}, async (err, mail) => {
    if (err) {
      logger.error(err, 'Error parsing incoming mail')
      callback()
      return
    }

    // This entry was received via SMTP and not the API endpoint
    db.insert(mailInboxEntryTable)
      .values({
        source: 'SMTP',
        smtp: mail,
        envelope: session.envelope,
        html: mail.html || null,
        text: mail.text || null,
      })
      .run()

    // Invalidate the live query for the mailInbox
    // TODO: Is there a way to say only invalidate the query for the SMTP source?
    await liveQueryStore?.invalidate('Query.mailInbox')

    callback()
  })
}
