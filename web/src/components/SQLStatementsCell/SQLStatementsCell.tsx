import {
  Bold,
  Card,
  Col,
  Grid,
  LineChart,
  Subtitle,
  Tab,
  TabGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import type { SQLStatementsQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
    fetchPolicy: 'cache-and-network',
  }
}

export const QUERY = gql`
  query SQLStatementsQuery {
    sqlStatements: sqlStatementSpans {
      id
      spanId
      startedAt
      durationMs
      durationSec
      attributeKey
      attributeValue
    }
    statistics: sqlStatementStatistics {
      intervalStartedAt
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
    statementStats: sqlStatementAttributeStatistics {
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

export const Loading = () => <Subtitle>Loading...</Subtitle>

export const Empty = () => (
  <Card>
    <Subtitle>Recent GraphQL Operations</Subtitle>
    <Bold>No recent records.</Bold>
  </Card>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sqlStatements,
  statistics,
  statementStats,
}: CellSuccessProps<SQLStatementsQuery>) => {
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
    <TabGroup>
      <TabList className="mt-8">
        <Tab>Overview</Tab>
        <Tab>Recent Details</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
            <Col numColSpanSm={2} numColSpanLg={3}>
              <Card>
                <Subtitle>Overall vs Time (5 Min Intervals)</Subtitle>
                <LineChart
                  index={'date'}
                  data={data}
                  categories={['min', 'max', 'avg']}
                  colors={['orange', 'emerald', 'rose']}
                />
              </Card>
            </Col>
            <Col numColSpanSm={2} numColSpanLg={3}>
              <Card>
                <Subtitle>Stats Overall</Subtitle>
                <Table className="mt-5">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell className="max-w-96">
                        SQL Statement
                      </TableHeaderCell>
                      <TableHeaderCell className="text-right">
                        Count
                      </TableHeaderCell>
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
                    {statementStats.map((item) => {
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
            </Col>
            <Col numColSpanSm={2} numColSpanLg={3}>
              <Card>
                <Subtitle>Overall Stats (5 Min Intervals)</Subtitle>
                <Table className="mt-5">
                  <TableHead>
                    <TableRow>
                      <TableHeaderCell>Ago</TableHeaderCell>
                      <TableHeaderCell className="text-right">
                        Count
                      </TableHeaderCell>
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
                          <TableCell className="text-right">
                            {item.count}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.min}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.max}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.avg}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Card>
            </Col>
          </Grid>
        </TabPanel>
        <TabPanel>
          <Card>
            <Subtitle>Recent SQL Statements</Subtitle>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell></TableHeaderCell>
                  <TableHeaderCell className="max-w-96">
                    SQL Statement
                  </TableHeaderCell>
                  <TableHeaderCell>Ago</TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Duration (msec)
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right">
                    Duration (s)
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sqlStatements.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <LinkingIcon
                          to={routes.opentelemetrySpan({ id: item.spanId })}
                        />
                      </TableCell>
                      <TableCell className="!text-wrap max-w-96 !whitespace-normal !break-all">
                        {item.attributeValue}
                      </TableCell>
                      <TableCell>
                        {formatDistanceToNow(parseISO(item.startedAt), {
                          includeSeconds: true,
                          addSuffix: true,
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.durationMs}
                      </TableCell>
                      <TableCell className="text-right">
                        {item.durationSec}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Card>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
