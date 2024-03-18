import { Title } from '@tremor/react'

import RenderGraphCell from 'src/components/RenderGraphCell'

const RenderGraphPage = ({ routeName }: { routeName: string }) => {
  return (
    <>
      <Title className="mb-4">Render Graph</Title>
      <RenderGraphCell routeName={routeName} />
    </>
  )
}

export default RenderGraphPage
