import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import GraphQLOperationsCell from 'src/components/GraphQLOperationsCell'

const GraphQLOperationsPage = () => {
  return (
    <>
      <Metadata title="GraphQl Operations" description="GraphQl Operations" />

      <Title className="pb-4">GraphQL Operations</Title>
      <GraphQLOperationsCell />
    </>
  )
}

export default GraphQLOperationsPage
