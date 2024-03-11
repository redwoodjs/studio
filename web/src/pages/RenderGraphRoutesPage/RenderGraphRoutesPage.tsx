import { Metadata } from '@redwoodjs/web'

import RenderGraphRoutesCell from 'src/components/RenderGraphRoutesCell'

const RenderGraphRoutesPage = () => {
  return (
    <>
      <Metadata
        title="RenderGraphRoutes"
        description="RenderGraphRoutes page"
      />

      <h1>RenderGraphRoutesPage</h1>
      <RenderGraphRoutesCell />
    </>
  )
}

export default RenderGraphRoutesPage
