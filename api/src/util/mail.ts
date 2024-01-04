import { simpleParser as simpleMailParser } from 'mailparser'
import type { SMTPServerDataStream, SMTPServerSession } from 'smtp-server'

import { liveQueryStore } from '@redwoodjs/realtime'

import { db, generateTypicalValues } from 'src/lib/db'
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

    const { id: rowId, createdAt, updatedAt } = generateTypicalValues()
    const smtpJSON = JSON.stringify(mail)
    const envelopeJSON = JSON.stringify(session.envelope)
    const rowsAffected =
      await db.$executeRaw`INSERT INTO MailSMTPInboxEntry (id, createdAt, updatedAt, smtp, envelope, html, plaintext) VALUES (${rowId}, ${createdAt}, ${updatedAt}, ${smtpJSON}, ${envelopeJSON}, ${
        mail.html ?? 'NULL'
      }, ${mail.text ?? 'NULL'});`
    if (rowsAffected < 1) {
      logger.error('Error inserting mail into database')
      callback()
      return
    }

    // Invalidate the live query for the mailSMTPInboxEntries query
    await liveQueryStore?.invalidate('Query.mailSMTPInboxEntries')

    callback()
  })
}
