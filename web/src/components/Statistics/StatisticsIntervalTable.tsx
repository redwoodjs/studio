import {
  Card,
  Subtitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import type { SpanStatistics } from 'types/graphql'

type Props = {
  statistics: SpanStatistics[]
  interval: string
}

const StatisticsIntervalTable = ({ statistics, interval }: Props) => {
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
      <Subtitle>Overall Stats ({interval} Intervals)</Subtitle>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Ago</TableHeaderCell>
            <TableHeaderCell className="text-right">Count</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Min Duration (msec)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Max Duration (msec)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Avg. Duration (msec)
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.date}>
                <TableCell>
                  {formatDistanceToNow(parseISO(item.date), {
                    includeSeconds: true,
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell className="text-right">{item.count}</TableCell>
                <TableCell className="text-right">{item.min}</TableCell>
                <TableCell className="text-right">{item.max}</TableCell>
                <TableCell className="text-right">{item.avg}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default StatisticsIntervalTable
