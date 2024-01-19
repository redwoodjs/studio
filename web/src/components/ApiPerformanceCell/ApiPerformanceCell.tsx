import { Card, Text } from '@tremor/react'
import type {
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PerformanceLineChart from 'src/components/Charts/LineCharts/PerformanceLineChart'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5,
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GetApiPerformanceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetApiPerformanceQuery,
  GetApiPerformanceQueryVariables
>) => {
  return (
    <Card>
      <Text>Api Performance</Text>
      <PerformanceLineChart dataPoints={dataPoints} />
    </Card>
  )
}
