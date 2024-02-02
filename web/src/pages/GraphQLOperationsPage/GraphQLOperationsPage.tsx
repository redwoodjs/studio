import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import GraphQLOperationsCell from 'src/components/GraphQLOperationsCell'

const GraphQLOperationsPage = () => {
  return (
    <>
      <Metadata title="GraphQL Operations" description="GraphQL Operations" />

      <Title className="pb-4">GraphQL Operations</Title>
      <GraphQLOperationsCell />
    </>
  )
}

export default GraphQLOperationsPage
