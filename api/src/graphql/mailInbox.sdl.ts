export const schema = gql`
  type MailInboxEntry {
    id: ID!
    source: String!
    api: JSON
    text: String
    html: String
    smtp: JSON
    envelope: JSON
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    mailInboxEntries(source: String!): [MailInboxEntry!]! @skipAuth
  }
`;
