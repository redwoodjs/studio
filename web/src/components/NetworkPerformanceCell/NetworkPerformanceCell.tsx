import { Card } from '@tremor/react'
import type {
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartCard from 'src/components/Charts/ChartCard'
import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartLoadingState from 'src/components/Charts/ChartLoadingState'
import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'
import { NetworkPerformanceIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
  }
}

export const QUERY = gql`
  query GetNetworkPerformanceQuery($filter: PerformanceFilterCriteria) {
    dataPoints: networkPerformance(filter: $filter) {
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
    caption="Network Performance"
    icon={NetworkPerformanceIcon}
    tooltip="Network Performance"
  >
    <ChartLoadingState />
  </ChartCard>
)

export const Empty = () => (
  <ChartCard
    caption="Network Performance"
    icon={NetworkPerformanceIcon}
    tooltip="Network Performance"
  >
    <ChartEmptyState />
  </ChartCard>
)

export const Failure = ({
  error,
}: CellFailureProps<GetNetworkPerformanceQueryVariables>) => (
  <ChartCard
    caption="Network Performance"
    icon={NetworkPerformanceIcon}
    tooltip="Network Performance"
  >
    <ChartFailureState message={error.message} />
  </ChartCard>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables
>) => {
  return (
    <ChartCard
      caption="Network Performance"
      icon={NetworkPerformanceIcon}
      tooltip="Network Performance"
    >
      <PerformanceLineChart dataPoints={dataPoints} />{' '}
    </ChartCard>
  )
}
