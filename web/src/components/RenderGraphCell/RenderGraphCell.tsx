import { Card, Subtitle } from '@tremor/react'
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
import { ErrorIcon, RoutesIcon } from 'src/icons/Icons'

export const beforeQuery = (props: FindRenderGraphQueryVariables) => {
  return { variables: props, fetchPolicy: 'network-only' }
}

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
      route {
        id
        name
      }
      initialEdges
      initialNodes
    }
  }
`

export const Loading = () => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="text-center">
        <RoutesIcon
          className="mx-auto h-7 w-7 animate-bounce text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
          aria-hidden={true}
        />

        <p className="mt-2 animate-pulse text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Loading ...
        </p>
      </div>
    </Card>
  </div>
)

export const Empty = () => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="flex h-44 items-center justify-center rounded-tremor-small border border-dashed border-tremor-border p-4 dark:border-dark-tremor-border">
        <div className="text-center">
          <RoutesIcon
            className="mx-auto h-7 w-7 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
            aria-hidden={true}
          />
          <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            No routes to show
          </p>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Be sure your RSC application is running and has routes defined.
          </p>
        </div>
      </div>
    </Card>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="text-center">
        <ErrorIcon
          className="mx-auto h-7 w-7 animate-pulse text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
          aria-hidden={true}
        />

        <p className="mt-2 animate-pulse text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {error?.message}
        </p>
      </div>
    </Card>
  </div>
)

export const Success = ({
  renderGraph,
  renderGraphRoutes,
}: CellSuccessProps<FindRenderGraphQuery, FindRenderGraphQueryVariables>) => {
  return (
    <>
      <Subtitle className="mb-4">
        The render component tree for the{' '}
        <span className="font-semibold">{renderGraph.route.name}</span> route.
      </Subtitle>
      <div className="mr-2 flex h-full flex-col md:flex-row">
        <div className="h-screen w-full rounded-md border bg-white p-4 md:w-2/3">
          <RouteGraph renderGraph={renderGraph} />
        </div>

        <div className="mx-4 h-full w-full overflow-auto rounded-md border bg-white md:w-1/3">
          <div className="h-screen p-4">
            <RouteCardsGrid
              renderGraphRoutes={renderGraphRoutes}
              currentRoute={renderGraph.route.name}
              componentCount={renderGraph.initialNodes.length - 1}
            />
          </div>
        </div>
      </div>
    </>
  )
}
