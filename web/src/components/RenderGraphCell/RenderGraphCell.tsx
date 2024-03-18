import type {
  FindRenderGraphQuery,
  FindRenderGraphQueryVariables,
} from 'types/graphql'

import 'reactflow/dist/style.css'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { RouteGraph } from 'src/components/RenderGraphCell/RouteGraph'
import { RouteCardsGrid } from 'src/components/RenderGraphRoutesCell/RouteCardsGrid'

export const QUERY: TypedDocumentNode<
  FindRenderGraphQuery,
  FindRenderGraphQueryVariables
> = gql`
  query FindRenderGraphQuery($routeName: String!) {
    renderGraphRoutes {
      id
      name
    }
    renderGraph: renderGraph(routeName: $routeName) {
      id
      initialEdges
      initialNodes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRenderGraphQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  renderGraph,
  renderGraphRoutes,
}: CellSuccessProps<FindRenderGraphQuery, FindRenderGraphQueryVariables>) => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Column */}
      <div className="h-screen w-full p-4 md:w-4/5">
        {/* Your content here */}
        <RouteGraph renderGraph={renderGraph} />
      </div>

      {/* Right Column */}
      <div className="h-screen w-full p-4 md:w-1/5">
        {/* Your content here */}
        <RouteCardsGrid renderGraphRoutes={renderGraphRoutes} />
      </div>
    </div>
  )
}
