import { Title, Grid, Col, Card, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

const TelemetryDashboardPage = () => {
  return (
    <>
      <MetaTags
        title="TelemetryDashboard"
        description="TelemetryDashboard page"
      />

      <Title>OpenTelemetry Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        <Col numColSpanLg={6}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>

        <Col numColSpanLg={4}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>

        <Col numColSpanLg={2}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default TelemetryDashboardPage
