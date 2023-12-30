import type {
  FindSpanDescendantsQuery,
  FindSpanDescendantsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSpanDescendantsQuery($id: String!) {
    descendants: otelSpanDescendants(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSpanDescendantsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  descendants,
}: CellSuccessProps<
  FindSpanDescendantsQuery,
  FindSpanDescendantsQueryVariables
>) => {
  return <pre>{JSON.stringify(descendants, undefined, 2)}</pre>
}
