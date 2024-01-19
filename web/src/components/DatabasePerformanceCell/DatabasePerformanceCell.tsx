import { Card, Text } from '@tremor/react'
import type {
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables,
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GetDatabasePerformanceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dataPoints,
}: CellSuccessProps<
  GetDatabasePerformanceQuery,
  GetDatabasePerformanceQueryVariables
>) => {
  return (
    <Card>
      <Text>Database Performance</Text>

      <PerformanceLineChart dataPoints={dataPoints} />
    </Card>
  )
}
