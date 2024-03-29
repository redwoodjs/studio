import { Text, BarList, Metric, Card, Flex } from '@tremor/react'
import type {
  SQLDashboardStatsQuery,
  SQLDashboardStatsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartHeading from 'src/components/Charts/ChartHeading'
import { DatabaseIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 2_000,
  }
}

export const QUERY = gql`
  query SQLDashboardStatsQuery {
    stats: sqlStatementAttributeStatistics {
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
}: CellFailureProps<SQLDashboardStatsQueryVariables>) => (
  <div className="font-bold text-tremor-brand dark:text-dark-tremor-brand">
    Error: {error?.message}
  </div>
)

export const Success = ({
  stats,
}: CellSuccessProps<
  SQLDashboardStatsQuery,
  SQLDashboardStatsQueryVariables
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
        caption="SQL Stats"
        icon={DatabaseIcon}
        tooltip="SQL Stats"
      />
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="mt-6 space-x-2"
      >
        <Metric>{total}</Metric>
        <Text>SQL Statements Made</Text>
      </Flex>
      <Flex className="mt-6">
        <Text>SQL Statement</Text>
        <Text className="text-right">Count</Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  )
}
