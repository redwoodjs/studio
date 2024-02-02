import { Card, Subtitle, LineChart } from '@tremor/react'
import type { SpanStatistics } from 'types/graphql'

type Props = {
  statistics: SpanStatistics[]
  interval: string
}

const StatisticsIntervalChart = ({ statistics, interval }: Props) => {
  const data = statistics.map((item) => {
    return {
      date: item.intervalStartedAt,
      count: item.statisticCount,
      min: item.minDurationMs,
      max: item.maxDurationMs,
      avg: item.avgDurationMs,
    }
  })

  return (
    <Card>
      <Subtitle>Overall vs Time ({interval} Intervals)</Subtitle>
      <LineChart
        index={'date'}
        data={data}
        categories={['min', 'max', 'avg']}
        colors={['orange', 'emerald', 'rose']}
      />
    </Card>
  )
}

export default StatisticsIntervalChart
