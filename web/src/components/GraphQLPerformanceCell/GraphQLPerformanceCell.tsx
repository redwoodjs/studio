import { Card } from '@tremor/react'
import type {
  GetGraphQLPerformanceQuery,
  GetGraphQLPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartHeading from 'src/components/Charts/ChartHeading'
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

export const Loading = () => <ChartLoadingState />

export const Empty = () => <ChartEmptyState />

export const Failure = ({
  error,
}: CellFailureProps<GetGraphQLPerformanceQueryVariables>) => (
  <ChartFailureState message={error.message} />
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetGraphQLPerformanceQuery,
  GetGraphQLPerformanceQueryVariables
>) => {
  return (
    <Card>
      <ChartHeading
        caption="GraphQL Performance"
        icon={GraphQLPerformanceIcon}
        tooltip="GraphQL Performance"
      />
      <PerformanceLineChart dataPoints={dataPoints} />{' '}
    </Card>
  )
}
