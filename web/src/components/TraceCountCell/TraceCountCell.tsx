import { Text, Metric } from '@tremor/react'
import type {
  FindOtelTraceCountQuery,
  FindOtelTraceCountQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindOtelTraceCountQuery @live {
    otelTraceCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOtelTraceCountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  otelTraceCount,
}: CellSuccessProps<
  FindOtelTraceCountQuery,
  FindOtelTraceCountQueryVariables
>) => {
  return (
    <div>
      <Text>Traces</Text>
      <Metric>{otelTraceCount}</Metric>
    </div>
  )
}
