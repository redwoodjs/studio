import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import RenderGraphCell from 'src/components/RenderGraphCell'
const RenderGraphPage = ({ routeName }: { routeName: string }) => {
  return (
    <>
      <Metadata
        title="Render Graph"
        description={`The render component tree for the{' '}
        ${routeName} route.`}
      />
      <Title className="mb-4">Render Graph</Title>
      <RenderGraphCell routeName={routeName} />
    </>
  )
}

export default RenderGraphPage
