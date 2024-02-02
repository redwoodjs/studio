import { Title, Subtitle } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import GraphQLSchemaCell from 'src/components/GraphQLSchemaCell'

const GraphQLSchemaPage = () => {
  return (
    <>
      <Metadata title="GraphQL Schema" description="GraphQL Schema" />

      <Title>GraphQL Schema</Title>
      <Subtitle>Your schema</Subtitle>
      <GraphQLSchemaCell />
    </>
  )
}

export default GraphQLSchemaPage
