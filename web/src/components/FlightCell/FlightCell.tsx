import type { FindFlightQuery, FindFlightQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { FlightPayloadViewer } from './FlightPayloadViewer'

export const QUERY: TypedDocumentNode<
  FindFlightQuery,
  FindFlightQueryVariables
> = gql`
  query FindFlightQuery($id: String!) {
    flight: flight(id: $id) {
      id
      payload
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFlightQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  flight,
}: CellSuccessProps<FindFlightQuery, FindFlightQueryVariables>) => {
  return (
    <div>
      <FlightPayloadViewer payload={flight.payload} />
    </div>
  )
}
