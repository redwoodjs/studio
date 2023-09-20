export const schema = gql`
  type MailRenderer {
    id: ID!
    key: String!
    isDefault: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    mailRenderers: [MailRenderer!]! @skipAuth
  }

  type Mutation {
    resyncMailRenderers: Boolean! @skipAuth
  }
`
