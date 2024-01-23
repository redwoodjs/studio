import { Title, Grid, Col, Card, Text, Flex } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import ApiPerformanceCell from 'src/components/ApiPerformanceCell'
import DatabasePerformanceCell from 'src/components/DatabasePerformanceCell'
import GraphQLPerformanceCell from 'src/components/GraphQLPerformanceCell'
import MailCountCell from 'src/components/MailCountCell'
import NetworkPerformanceCell from 'src/components/NetworkPerformanceCell'
import SpanCountCell from 'src/components/SpanCountCell'
import TraceCountCell from 'src/components/TraceCountCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Your app at a glance." />

      <Title>Dashboard</Title>
      <Text>Your app at a glance.</Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Grid numItemsLg={2} className="mt-6 gap-6">
            <DatabasePerformanceCell filter={{ secondsAgo: 120 }} />
            <GraphQLPerformanceCell filter={{ secondsAgo: 120 }} />
            <ApiPerformanceCell filter={{ secondsAgo: 120 }} />
            <NetworkPerformanceCell filter={{ secondsAgo: 120 }} />
          </Grid>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <Card>
              <Flex
                flexDirection="row"
                justifyContent="evenly"
                alignItems="start"
                className="gap-2 text-center"
              >
                <TraceCountCell />
                <SpanCountCell />
              </Flex>
            </Card>
            <Card>
              <MailCountCell />
            </Card>
            {/* <Card></Card> */}
          </div>
        </Col>
      </Grid>
    </>
  )
}

export default HomePage
