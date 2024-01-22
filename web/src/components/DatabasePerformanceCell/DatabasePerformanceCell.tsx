import { CircleStackIcon } from '@heroicons/react/24/outline'
import { Card } from '@tremor/react'
import type {
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables,
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

export const Loading = () => <ChartLoadingState />

export const Empty = () => <ChartEmptyState />

export const Failure = ({
  error,
}: CellFailureProps<GetDatabasePerformanceQueryVariables>) => (
  <ChartFailureState message={error.message} />
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables
>) => {
  return (
    <Card>
      <ChartHeading
        caption="Database Performance"
        icon={CircleStackIcon}
        tooltip="Database Performance"
      />
      <PerformanceLineChart dataPoints={dataPoints} />
    </Card>
  )
}
