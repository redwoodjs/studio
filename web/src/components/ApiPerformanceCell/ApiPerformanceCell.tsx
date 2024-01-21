import { Card } from '@tremor/react'
import type {
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartEmptyState from 'src/components/Charts/ChartEmptyState'
import ChartFailureState from 'src/components/Charts/ChartFailureState'
import ChartHeading from 'src/components/Charts/ChartHeading'
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

export const Loading = () => <ChartLoadingState />

export const Empty = () => <ChartEmptyState />

export const Failure = ({
  error,
}: CellFailureProps<GetApiPerformanceQueryVariables>) => (
  <ChartFailureState message={error.message} />
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables
>) => {
  return (
    <Card>
      <ChartHeading
        caption="API Performance"
        icon={ApiPerformanceIcon}
        tooltip="API Performance"
      />
      <PerformanceLineChart dataPoints={dataPoints} />
    </Card>
  )
}
