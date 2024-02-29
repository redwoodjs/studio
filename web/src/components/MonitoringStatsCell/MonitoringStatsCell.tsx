import { Text, BarList, Metric, Card, Flex } from '@tremor/react'
import type {
  MonitoringStatsQuery,
  MonitoringStatsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartHeading from 'src/components/Charts/ChartHeading'
import { MonitoringIcon } from 'src/icons/Icons'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 2_000,
  }
}

export const QUERY = gql`
  query MonitoringStatsQuery @live {
    otelTraceCount
    otelSpanCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<MonitoringStatsQueryVariables>) => (
  <div className="font-bold text-tremor-brand dark:text-dark-tremor-brand">
    Error: {error?.message}
  </div>
)

export const Success = ({
  otelTraceCount,
  otelSpanCount,
}: CellSuccessProps<MonitoringStatsQuery, MonitoringStatsQueryVariables>) => {
  const data = [
    {
      name: 'Traces',
      value: otelTraceCount,
    },
    {
      name: 'Spans',
      value: otelSpanCount,
    },
  ].sort((a, b) => b.value - a.value)

  let avg = 0

  if (otelTraceCount > 0) {
    avg = otelSpanCount / otelTraceCount
  }

  return (
    <Card>
      <ChartHeading
        caption="Monitoring Stats"
        icon={MonitoringIcon}
        tooltip="Monitoring Stats"
      />
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="mt-6 space-x-2"
      >
        <Metric>{avg.toFixed(2)}</Metric>
        <Text>Spans per Trace</Text>
      </Flex>
      <Flex className="mt-6">
        <Text>Source</Text>
        <Text className="text-right">Count</Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  )
}
