export const schema = gql`
  interface PerformanceStatistic {
    statisticCount: BigInt!
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

  type SpanStatistics implements PerformanceStatistic {
    intervalStartedAt: DateTime!
    statisticCount: BigInt!
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
  type SpanAttributeStatistics implements PerformanceStatistic {
    attributeValue: String!
    statisticCount: BigInt!
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
    spanAttributeStatistics: [SpanAttributeStatistics!]! @skipAuth
    sqlStatementAttributeStatistics: [SpanAttributeStatistics!]! @skipAuth
    graphQLOperationAttributeStatistics: [SpanAttributeStatistics!]! @skipAuth
    anonymousGraphQLOperationAttributeStatistics: [SpanAttributeStatistics!]!
      @skipAuth
  }
`
