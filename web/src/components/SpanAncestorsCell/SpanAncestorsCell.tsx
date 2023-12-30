import type {
  FindSpanAncestorsQuery,
  FindSpanAncestorsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSpanAncestorsQuery($id: String!) {
    ancestors: otelSpanAncestors(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSpanAncestorsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  ancestors,
}: CellSuccessProps<
  FindSpanAncestorsQuery,
  FindSpanAncestorsQueryVariables
>) => {
  return <pre>{JSON.stringify(ancestors, undefined, 2)}</pre>
}
