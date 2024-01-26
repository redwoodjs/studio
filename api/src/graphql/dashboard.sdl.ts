export const schema = gql`
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  interface Paginated {
    pageInfo: PageInfo!
    totalCount: BigInt!
  }

  type SpansByAttributeKeyAndType {
    id: String!
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

  type PaginatedSpansByAttributeKeyAndType implements Paginated {
    results: [SpansByAttributeKeyAndType!]!
    pageInfo: PageInfo!
    totalCount: BigInt!
  }

  type Query {
    sqlStatementSpans: PaginatedSpansByAttributeKeyAndType! @skipAuth
    prismaModelSpans: PaginatedSpansByAttributeKeyAndType! @skipAuth
    graphQLOperationSpans: PaginatedSpansByAttributeKeyAndType! @skipAuth
    anonymousGraphQLOperationSpans: PaginatedSpansByAttributeKeyAndType!
      @skipAuth
  }

  type PerformanceDataPoint {
    id: String!
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
