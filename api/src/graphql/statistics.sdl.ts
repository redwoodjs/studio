export const schema = gql`
  type SpanStatistics {
    intervalStartedAt: DateTime!
    minDuration: BigInt!
    maxDuration: BigInt!
    avgDuration: Float!
    minDurationMs: Float!
    minDurationSec: Float!
    maxDurationMs: Float!
    maxDurationSec: Float!
    avgDurationMs: Float!
    avgDurationSec: Float!
  }

  type Query {
    spanStatistics: [SpanStatistics!]! @skipAuth
    sqlStatementStatistics(intervalMins: Int): [SpanStatistics!]! @skipAuth
    graphQLOperationStatistics(intervalMins: Int): [SpanStatistics!]! @skipAuth
    anonymousGraphQLOperationStatistics(intervalMins: Int): [SpanStatistics!]!
      @skipAuth
  }
`
