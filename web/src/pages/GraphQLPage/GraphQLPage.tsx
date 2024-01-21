import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Title, Grid, Col, Card, Text, Callout } from '@tremor/react'
import { GetGraphQLInspectorResults } from 'types/graphql'

import { MetaTags, useQuery } from '@redwoodjs/web'

import GraphQlSchemaCell from 'src/components/GraphQLSchemaCell'

const INSPECTOR_QUERY = gql`
  # Have as a live query
  query GetGraphQLInspectorResults {
    graphqlInspectorCoverage
  }
`

const GraphQLPage = () => {
  const inspectorQuery = useQuery<GetGraphQLInspectorResults>(INSPECTOR_QUERY)
  return (
    <>
      <MetaTags title="GraphQlSchema" description="GraphQlSchema page" />

      <Title>GraphQL Schema</Title>
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
            <GraphQlSchemaCell />
          </Card>
        </Col>

        {/* Linting sidebar */}
        <Col numColSpanLg={2}>
          <Card className="h-full">
            <div className="h-full" />
          </Card>
        </Col>

        {/* Inspector output */}
        <Col numColSpanLg={6}>
          <Card className="h-full">
            {inspectorQuery.loading ? (
              <Card className="h-full p-6">Loading...</Card>
            ) : inspectorQuery.error ? (
              <Callout
                title="Error"
                icon={ExclamationTriangleIcon}
                color="rose"
              >
                <div className="h-full w-full overflow-x-auto">
                  <pre className="text-gray-500 dark:text-gray-600">
                    {JSON.stringify(inspectorQuery.error, undefined, 2)}
                  </pre>
                </div>
              </Callout>
            ) : (
              <div className="h-full w-full overflow-x-auto">
                <pre className="text-gray-500 dark:text-gray-600">
                  {JSON.stringify(inspectorQuery.data, undefined, 2)}
                </pre>
              </div>
            )}
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default GraphQLPage
