import { Metadata } from '@redwoodjs/web'

import RenderGraphRoutesCell from 'src/components/RenderGraphRoutesCell'

const RenderGraphRoutesPage = () => {
  return (
    <>
      <Metadata title="Render Graph Routes" description="Render Graph Routes" />

      <h1>Render Graph Routes Page</h1>
      <RenderGraphRoutesCell />
    </>
  )
}

export default RenderGraphRoutesPage
