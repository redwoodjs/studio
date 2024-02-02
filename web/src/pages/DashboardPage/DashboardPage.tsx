import { Title, Grid, Col, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ApiPerformanceCell from 'src/components/ApiPerformanceCell'
import DatabasePerformanceCell from 'src/components/DatabasePerformanceCell'
import GraphQLPerformanceCell from 'src/components/GraphQLPerformanceCell'
import GraphQLStatsCell from 'src/components/GraphQLStatsCell'
import MailerStatsCell from 'src/components/MailerStatsCell'
import MonitoringStatsCell from 'src/components/MonitoringStatsCell'
import NetworkPerformanceCell from 'src/components/NetworkPerformanceCell'
import SQLStatsCell from 'src/components/SQLStatsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Your app at a glance." />

      <Title>Dashboard</Title>
      <Text>Your app at a glance.</Text>

      <Grid numItems={2} className="mt-6 gap-6">
        <Col>
          <DatabasePerformanceCell filter={{ secondsAgo: 300 }} />
        </Col>
        <Col>
          <GraphQLPerformanceCell filter={{ secondsAgo: 300 }} />
        </Col>
        <Col>
          <ApiPerformanceCell filter={{ secondsAgo: 300 }} />
        </Col>
        <Col>
          <NetworkPerformanceCell filter={{ secondsAgo: 300 }} />
        </Col>
        <Col>
          <SQLStatsCell />
        </Col>
        <Col>
          <GraphQLStatsCell />
        </Col>
        <Col>
          <MonitoringStatsCell />
        </Col>
        <Col>
          <MailerStatsCell />
        </Col>
      </Grid>
    </>
  )
}

export default HomePage
