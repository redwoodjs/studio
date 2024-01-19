import { Card, Text } from '@tremor/react'
import type {
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables,
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GetNetworkPerformanceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetNetworkPerformanceQuery,
  GetNetworkPerformanceQueryVariables
>) => {
  return (
    <Card>
      <Text>Network Performance</Text>
      <PerformanceLineChart dataPoints={dataPoints} />{' '}
    </Card>
  )
}
