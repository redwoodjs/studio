import { Card } from '@tremor/react'
import type {
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartCard from 'src/components/Charts/ChartCard'
import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartLoadingState from 'src/components/Charts/ChartLoadingState'
import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'
import { ApiPerformanceIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
  }
}

export const QUERY = gql`
  query GetApiPerformanceQuery($filter: PerformanceFilterCriteria) {
    dataPoints: apiPerformance(filter: $filter) {
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
    caption="API Performance"
    icon={ApiPerformanceIcon}
    tooltip="API Performance"
  >
    <ChartLoadingState />
  </ChartCard>
)

export const Empty = () => (
  <ChartCard
    caption="API Performance"
    icon={ApiPerformanceIcon}
    tooltip="API Performance"
  >
    <ChartEmptyState />
  </ChartCard>
)

export const Failure = ({
  error,
}: CellFailureProps<GetApiPerformanceQueryVariables>) => (
  <ChartCard
    caption="API Performance"
    icon={ApiPerformanceIcon}
    tooltip="API Performance"
  >
    <ChartFailureState message={error.message} />
  </ChartCard>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables
>) => {
  return (
    <ChartCard
      caption="API Performance"
      icon={ApiPerformanceIcon}
      tooltip="API Performance"
    >
      <PerformanceLineChart dataPoints={dataPoints} />
    </ChartCard>
  )
}
