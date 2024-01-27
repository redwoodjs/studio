import { Title, Grid, Col, Card, Text } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

import GraphQLSchemaCell from 'src/components/GraphQLSchemaCell'

const GraphQLSchemaPage = () => {
  return (
    <>
      <MetaTags title="GraphQL Schema" description="GraphQL Schema" />

      <Title>GraphQL Schema</Title>
      <Text>Your schema.</Text>

      <Grid numItems={1} numItemsLg={1} className="mt-6 gap-6">
        {/* Schema visualisation panel */}
        <Col>
          <Card className="h-full w-full p-6">
            <GraphQLSchemaCell />
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default GraphQLSchemaPage
