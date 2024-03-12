import { Metadata } from '@redwoodjs/web'

import RenderGraphRoutesCell from 'src/components/RenderGraphRoutesCell'

const RenderGraphRoutesPage = () => {
  return (
    <>
      <Metadata
        title="RenderGraphRoutes"
        description="RenderGraphRoutes page"
      />

      <h1>Render Graph Routes Page</h1>
      <RenderGraphRoutesCell />
    </>
  )
}

export default RenderGraphRoutesPage
