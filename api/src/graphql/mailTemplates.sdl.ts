export const schema = gql`
  type MailTemplate {
    id: ID!
    name: String!
    path: String!
    components: [MailTemplateComponent!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type MailTemplateComponent {
    id: ID!
    name: String!
    propsTemplate: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type MailTemplateRendered {
    id: ID!
    props: JSON!
    html: String
    text: String
  }

  type Query {
    mailTemplates: [MailTemplate!]! @skipAuth
    mailRenderedTemplate(
      templateId: ID!
      componentId: ID!
      rendererId: ID!
      props: String!
    ): MailTemplateRendered! @skipAuth
    mailComponentCount: Int! @skipAuth
  }

  type Mutation {
    resyncMailTemplate(rawTemplateDistPath: String!): Boolean! @skipAuth
  }
`
