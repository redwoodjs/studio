import type {
  RenderGraphRoutesQuery,
  RenderGraphRoutesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { RouteCardsGrid } from './RouteCardsGrid'

export const QUERY: TypedDocumentNode<
  RenderGraphRoutesQuery,
  RenderGraphRoutesQueryVariables
> = gql`
  query RenderGraphRoutesQuery {
    renderGraphRoutes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  renderGraphRoutes,
}: CellSuccessProps<RenderGraphRoutesQuery>) => {
  return <RouteCardsGrid renderGraphRoutes={renderGraphRoutes} />
}
