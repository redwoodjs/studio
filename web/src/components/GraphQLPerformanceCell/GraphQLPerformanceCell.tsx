import { Card } from '@tremor/react'
import type {
  GetGraphQLPerformanceQuery,
  GetGraphQLPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartCard from 'src/components/Charts/ChartCard'
import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartLoadingState from 'src/components/Charts/ChartLoadingState'
import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'
import { GraphQLPerformanceIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
  }
}

export const QUERY = gql`
  query GetGraphQLPerformanceQuery($filter: PerformanceFilterCriteria) {
    dataPoints: graphqlPerformance(filter: $filter) {
      id
      spanType
      spanTypeName
      startedAt
      endedAt
      durationMs
      durationSec
    }
  }
`

export const Loading = () => (
  <ChartCard
    caption="GraphQL Performance"
    icon={GraphQLPerformanceIcon}
    tooltip="GraphQL Performance"
  >
    <ChartLoadingState />
  </ChartCard>
)

export const Empty = () => (
  <ChartCard
    caption="GraphQL Performance"
    icon={GraphQLPerformanceIcon}
    tooltip="GraphQL Performance"
  >
    <ChartEmptyState />
  </ChartCard>
)

export const Failure = ({
  error,
}: CellFailureProps<GetGraphQLPerformanceQueryVariables>) => (
  <ChartCard
    caption="GraphQL Performance"
    icon={GraphQLPerformanceIcon}
    tooltip="GraphQL Performance"
  >
    <ChartFailureState message={error.message} />
  </ChartCard>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetGraphQLPerformanceQuery,
  GetGraphQLPerformanceQueryVariables
>) => {
  return (
    <ChartCard
      caption="GraphQL Performance"
      icon={GraphQLPerformanceIcon}
      tooltip="GraphQL Performance"
    >
      <PerformanceLineChart dataPoints={dataPoints} />{' '}
    </ChartCard>
  )
}
