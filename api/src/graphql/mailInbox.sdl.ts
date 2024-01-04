export const schema = gql`
  type MailAPIInboxEntry {
    id: ID!
    api: JSON!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type MailSMTPInboxEntry {
    id: ID!
    plaintext: String
    html: String
    smtp: JSON!
    envelope: JSON!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    mailAPIInboxEntries: [MailAPIInboxEntry!]! @skipAuth
    mailSMTPInboxEntries: [MailSMTPInboxEntry!]! @skipAuth
  }
`
