import {
  Bold,
  Card,
  Grid,
  Metric,
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
  Text,
  Title,
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
}: CellSuccessProps<SQLStatementsQuery>) => {
  return (
    <TabGroup>
      <TabList className="mt-8">
        <Tab>Recent</Tab>
        <Tab>Statistics</Tab>
      </TabList>
      <TabPanels>
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
        <TabPanel>
          <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
            {statistics.map((item) => {
              return (
                <Card key={item.intervalStartedAt}>
                  <Title>{item.intervalStartedAt}</Title>
                  {Object.entries(item).map(([key, value]) => {
                    if (key === 'intervalStartedAt' || key === '__typename') {
                      return null
                    }
                    return (
                      <Metric key={`${item.intervalStartedAt}-${key}`}>
                        <Text>{key}</Text>
                        <Text>{value}</Text>
                      </Metric>
                    )
                  })}
                </Card>
              )
            })}
          </Grid>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
