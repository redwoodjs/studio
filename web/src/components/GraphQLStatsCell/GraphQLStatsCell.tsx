import { Text, BarList, Metric, Card, Flex } from '@tremor/react'
import type {
  GraphQLDashboardStatsQuery,
  GraphQLDashboardStatsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartHeading from 'src/components/Charts/ChartHeading'
import { GraphQLIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 2_000,
  }
}

export const QUERY = gql`
  query GraphQLDashboardStatsQuery {
    stats: graphQLOperationAttributeStatistics {
      attributeValue
      statisticCount
      minDuration
      minDurationMs
      minDurationSec
      maxDuration
      maxDurationMs
      maxDurationSec
      avgDuration
      avgDurationMs
      avgDurationSec
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GraphQLDashboardStatsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  stats,
}: CellSuccessProps<
  GraphQLDashboardStatsQuery,
  GraphQLDashboardStatsQueryVariables
>) => {
  const data = stats.map((stat) => {
    return {
      name: stat.attributeValue,
      value: stat.statisticCount,
    }
  })

  const total = data.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <Card>
      <ChartHeading
        caption="GraphQL Stats"
        icon={GraphQLIcon}
        tooltip="GraphQL Stats"
      />
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="mt-6 space-x-2"
      >
        <Metric>{total}</Metric>
        <Text>Operations Made</Text>
      </Flex>
      <Flex className="mt-6">
        <Text>Operation</Text>
        <Text className="text-right">Count</Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  )
}
