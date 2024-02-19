import { useContext } from 'react'

import { Flex, Text } from '@tremor/react'
import type {
  FindSpanDescendantsQuery,
  FindSpanDescendantsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SpanGenericToggleContext } from 'src/context/SpanGenericToggleContext'

import { SpanLink } from '../SpanLink/SpanLink'

export const QUERY = gql`
  query FindSpanDescendantsQuery($id: String!) {
    descendants: otelSpanDescendants(id: $id) {
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
}: CellFailureProps<FindSpanDescendantsQueryVariables>) => (
  <div className="font-bold text-tremor-brand dark:text-dark-tremor-brand">
    Error: {error?.message}
  </div>
)

export const Success = ({
  descendants,
}: CellSuccessProps<
  FindSpanDescendantsQuery,
  FindSpanDescendantsQueryVariables
>) => {
  const { show } = useContext(SpanGenericToggleContext)
  return (
    <Flex
      flexDirection="col"
      className="mt-4 max-h-[100vh] gap-2 overflow-y-scroll p-2"
    >
      {descendants
        .filter((span) => span.type.id !== 'GENERIC' || show.descendants)
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
