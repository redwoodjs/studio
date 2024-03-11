import RenderGraphCell from 'src/components/RenderGraphCell'

const RenderGraphPage = ({ routeName }: { routeName: string }) => {
  return (
    <div>
      <RenderGraphCell routeName={routeName} />
    </div>
  )
}

export default RenderGraphPage
