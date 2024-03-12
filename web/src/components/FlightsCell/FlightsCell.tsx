import type { FlightsQuery, FlightsQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FlightsQuery,
  FlightsQueryVariables
> = gql`
  query FlightsQuery {
    flights {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ flights }: CellSuccessProps<FlightsQuery>) => {
  return (
    <ul>
      {flights.map((flight) => {
        return (
          <li key={flight.id}>
            <Link to={routes.flight({ id: flight.id })}>{flight.id}</Link>
          </li>
        )
      })}
    </ul>
  )
}
