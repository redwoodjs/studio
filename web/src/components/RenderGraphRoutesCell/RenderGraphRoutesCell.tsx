import type {
  RenderGraphRoutesQuery,
  RenderGraphRoutesQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

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
  return (
    <ul>
      {renderGraphRoutes.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.renderGraph({ routeName: item.name })}>
              {item.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
