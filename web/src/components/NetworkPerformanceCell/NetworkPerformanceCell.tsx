import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Card } from '@tremor/react'
import type {
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartHeading from 'src/components/Charts/ChartHeading'
import ChartLoadingState from 'src/components/Charts/ChartLoadingState'
import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5,
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

export const Loading = () => <ChartLoadingState />

export const Empty = () => <ChartEmptyState />

export const Failure = ({
  error,
}: CellFailureProps<GetNetworkPerformanceQueryVariables>) => (
  <ChartFailureState message={error.message} />
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables
>) => {
  return (
    <Card>
      <ChartHeading
        caption="Network Performance"
        icon={GlobeAltIcon}
        tooltip="Network Performance"
      />
      <PerformanceLineChart dataPoints={dataPoints} />{' '}
    </Card>
  )
}
