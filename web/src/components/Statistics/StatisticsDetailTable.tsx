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
import type { SpanAttributeStatistics } from 'types/graphql'

type Props = {
  statistics: SpanAttributeStatistics[]
}

const StatisticsDetailTable = ({ statistics }: Props) => {
  return (
    <Card>
      <Subtitle>Stats Overall</Subtitle>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="max-w-96">
              SQL Statement
            </TableHeaderCell>
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
          {statistics.map((item) => {
            return (
              <TableRow key={item.attributeValue}>
                <TableCell className="!text-wrap max-w-96 !whitespace-normal !break-all">
                  {item.attributeValue}
                </TableCell>
                <TableCell className="text-right">
                  {item.statisticCount}
                </TableCell>
                <TableCell className="text-right">
                  {item.minDurationMs}
                </TableCell>
                <TableCell className="text-right">
                  {item.maxDurationMs}
                </TableCell>
                <TableCell className="text-right">
                  {item.avgDurationMs}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default StatisticsDetailTable
