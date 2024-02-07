import {
  Bold,
  Card,
  Col,
  Grid,
  Subtitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'
import type { SQLStatementsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SpansDetailsTable from '../SpansDetailsTable/SpansDetailsTable'
import StatisticsDetailTable from '../Statistics/StatisticsDetailTable'
import StatisticsIntervalChart from '../Statistics/StatisticsIntervalChart'
import StatisticsIntervalTable from '../Statistics/StatisticsIntervalTable'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 2_000,
    fetchPolicy: 'cache-and-network',
  }
}

export const QUERY = gql`
  query SQLStatementsQuery {
    details: sqlStatementSpans {
      id
      spanId
      startedAt
      durationMs
      durationSec
      attributeKey
      attributeValue
    }
    statistics: sqlStatementStatistics(intervalMins: 1) {
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
  details,
  statistics,
  statementStats,
}: CellSuccessProps<SQLStatementsQuery>) => {
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
              <StatisticsIntervalChart
                statistics={statistics}
                interval={'1 Min'}
              />
            </Col>
            <Col numColSpanSm={2} numColSpanLg={3}>
              <StatisticsDetailTable statistics={statementStats} />
            </Col>
            <Col numColSpanSm={2} numColSpanLg={3}>
              <StatisticsIntervalTable
                statistics={statistics}
                interval={'1 Min'}
              />
            </Col>
          </Grid>
        </TabPanel>
        <TabPanel>
          <Card>
            <Subtitle>Recent SQL Statements</Subtitle>
            <SpansDetailsTable details={details} caption="SQL" />
          </Card>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
