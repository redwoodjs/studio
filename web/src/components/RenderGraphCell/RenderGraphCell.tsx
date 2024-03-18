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
      <div className="h-screen w-full p-4 md:w-2/3">
        <RouteGraph renderGraph={renderGraph} />
      </div>

      <div className="h-screen w-full overflow-auto border-l border-dashed border-slate-500 bg-white pl-4 md:w-1/3">
        <div className="h-full p-4">
          <RouteCardsGrid renderGraphRoutes={renderGraphRoutes} />
        </div>
      </div>
    </div>
  )
}
