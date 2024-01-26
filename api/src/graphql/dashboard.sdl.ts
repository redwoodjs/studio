export const schema = gql`
  type SpansByAttributeKeyAndType {
    id: String!
    spanId: String!
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
    sqlStatementSpans: [SpansByAttributeKeyAndType!] @skipAuth
    prismaModelSpans: [SpansByAttributeKeyAndType!] @skipAuth
    graphQLOperationSpans: [SpansByAttributeKeyAndType!] @skipAuth
    anonymousGraphQLOperationSpans: [SpansByAttributeKeyAndType!] @skipAuth
  }

  type PerformanceDataPoint {
    id: String!
    spanId: String!
    spanType: String!
    spanTypeName: String!
    startedAt: DateTime!
    endedAt: DateTime!
    durationMs: Float!
    durationSec: Float!
  }

  input PerformanceFilterCriteria {
    secondsAgo: Int
  }

  type Query {
    databasePerformance(
      filter: PerformanceFilterCriteria
    ): [PerformanceDataPoint!] @skipAuth
    graphqlPerformance(
      filter: PerformanceFilterCriteria
    ): [PerformanceDataPoint!] @skipAuth
    apiPerformance(filter: PerformanceFilterCriteria): [PerformanceDataPoint!]
      @skipAuth
    miscPerformance(filter: PerformanceFilterCriteria): [PerformanceDataPoint!]
      @skipAuth
    networkPerformance(
      filter: PerformanceFilterCriteria
    ): [PerformanceDataPoint!] @skipAuth
  }
`
