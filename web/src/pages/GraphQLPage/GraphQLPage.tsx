import { Title, Grid, Col, Card, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import GraphQlSchemaCell from 'src/components/GraphQLSchemaCell'

const GraphQLPage = () => {
  return (
    <>
      <MetaTags title="GraphQlSchema" description="GraphQlSchema page" />

      <Title>GraphQL Schema</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <Grid numItemsLg={6} className="gap-6 mt-6">
        {/* Timeline */}
        <Col numColSpanLg={6}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>

        {/* Schema visualisation */}
        <Col numColSpanLg={4}>
          <Card className="h-full -p-6">
            <GraphQlSchemaCell />
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

export default GraphQLPage
