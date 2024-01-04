import { Title, Grid, Col, Card, Text, Flex, Subtitle } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import MailCountCell from 'src/components/MailCountCell'
import SpanCountCell from 'src/components/SpanCountCell'
import TraceCountCell from 'src/components/TraceCountCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Title>Dashboard</Title>
      <Text>Your app at a glance.</Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full">
            <div className="h-60" />
          </Card>
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
