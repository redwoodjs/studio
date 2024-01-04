import { useContext } from 'react'

import { Flex, Text } from '@tremor/react'
import type {
  FindSpanAncestorsQuery,
  FindSpanAncestorsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SpanGenericToggleContext } from 'src/context/SpanGenericToggleContext'

import { SpanLink } from '../SpanLink/SpanLink'

export const QUERY = gql`
  query FindSpanAncestorsQuery($id: String!) {
    ancestors: otelSpanAncestors(id: $id) {
      id
      spanId
      name
      type {
        id
        name
        colour
      }
    }
  }
`

export const Loading = () => (
  <div>
    <Text>Loading...</Text>
  </div>
)

export const Empty = () => (
  <div>
    <Text>None...</Text>
  </div>
)

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
  const { show } = useContext(SpanGenericToggleContext)
  return (
    <Flex
      flexDirection="col"
      className="mt-4 max-h-[100vh] gap-2 overflow-y-scroll p-2"
    >
      {ancestors
        .filter((span) => span.type.id !== 'GENERIC' || show.ancestors)
        .map((span) => (
          <SpanLink
            key={span.id}
            id={span.spanId}
            name={span.name}
            type={span.type}
          />
        ))}
    </Flex>
  )
}
