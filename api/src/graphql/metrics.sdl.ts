export const schema = gql`
  type SpansByAttributeKeyAndType {
    createdAt: DateTime!
    updatedAt: DateTime!
    statusCode: Int!
    startedAt: DateTime!
    endedAt: DateTime!
    durationMs: Float!
    durationSec: Float!
    spanType: String!
    attributeKey: String!
    attributeValue: String
  }

  type Query {
    metricSqlStatements: [SpansByAttributeKeyAndType!]! @skipAuth
    metricPrismaModels: [SpansByAttributeKeyAndType!]! @skipAuth
    metricGraphQLOperations: [SpansByAttributeKeyAndType!]! @skipAuth
    metricAnonymousGraphQLOperations: [SpansByAttributeKeyAndType!]! @skipAuth
  }
`
