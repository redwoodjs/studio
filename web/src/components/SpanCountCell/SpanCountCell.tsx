import { Text, Metric } from '@tremor/react'
import type {
  FindOtelSpanCountQuery,
  FindOtelSpanCountQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindOtelSpanCountQuery @live {
    otelSpanCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindOtelSpanCountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  otelSpanCount,
}: CellSuccessProps<
  FindOtelSpanCountQuery,
  FindOtelSpanCountQueryVariables
>) => {
  return (
    <div>
      <Text>Spans</Text>
      <Metric>{otelSpanCount}</Metric>
    </div>
  )
}
