import { Title, Grid, Col, Card, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import PrismaSchemaCell from 'src/components/PrismaSchemaCell'

const DatabaseErdPage = () => {
  return (
    <>
      <MetaTags
        title="Database Entity Relationship Diagram"
        description="ER diagram of the database schema"
      />

      <Title>Database ERD</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numItemsLg={6} className="mt-6 gap-6">
        {/* Timeline */}
        <Col numColSpanLg={6}>
          <Card className="h-full">
            <Text>Timeline: Coming soon!</Text>
          </Card>
        </Col>

        {/* Schema visualisation */}
        <Col numColSpanLg={4}>
          <Card className="-p-6 h-full">
            <PrismaSchemaCell />
          </Card>
        </Col>

        {/* Linting sidebar */}
        <Col numColSpanLg={2}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default DatabaseErdPage
