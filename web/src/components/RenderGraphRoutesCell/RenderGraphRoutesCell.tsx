import type {
  RenderGraphRoutesQuery,
  RenderGraphRoutesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import {
  Loading as LoadingComponent,
  Empty as EmptyComponent,
  Failure as FailureComponent,
} from 'src/components/RenderGraphCell/RenderGraphCell'

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

export const Loading = () => <LoadingComponent />

export const Empty = () => <EmptyComponent />

export const Failure = ({ error }: CellFailureProps) => {
  return <FailureComponent error={error} />
}

export const Success = ({
  renderGraphRoutes,
}: CellSuccessProps<RenderGraphRoutesQuery>) => {
  return <RouteCardsGrid renderGraphRoutes={renderGraphRoutes} isWide={true} />
}
