import { Card } from '@tremor/react'
import type {
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartCard from 'src/components/Charts/ChartCard'
import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartLoadingState from 'src/components/Charts/ChartLoadingState'
import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'
import { DatabasePerformanceIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
  }
}

export const QUERY = gql`
  query GetDatabasePerformanceQuery($filter: PerformanceFilterCriteria) {
    dataPoints: databasePerformance(filter: $filter) {
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
    caption="Database Performance"
    icon={DatabasePerformanceIcon}
    tooltip="Database Performance"
  >
    <ChartLoadingState />
  </ChartCard>
)

export const Empty = () => (
  <ChartCard
    caption="Database Performance"
    icon={DatabasePerformanceIcon}
    tooltip="Database Performance"
  >
    <ChartEmptyState />
  </ChartCard>
)

export const Failure = ({
  error,
}: CellFailureProps<GetDatabasePerformanceQueryVariables>) => (
  <ChartCard
    caption="Database Performance"
    icon={DatabasePerformanceIcon}
    tooltip="Database Performance"
  >
    <ChartFailureState message={error.message} />
  </ChartCard>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables
>) => {
  return (
    <ChartCard
      caption="Database Performance"
      icon={DatabasePerformanceIcon}
      tooltip="Database Performance"
    >
      <PerformanceLineChart dataPoints={dataPoints} />
    </ChartCard>
  )
}
