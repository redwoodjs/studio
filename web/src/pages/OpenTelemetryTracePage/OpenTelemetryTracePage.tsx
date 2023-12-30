import { Title, Text, Flex } from '@tremor/react'
// import { GetSpans } from 'types/graphql'

import { MetaTags } from '@redwoodjs/web'

// const SPANS_QUERY = gql`
//   # Have as a live query
//   query GetSpans {
//     otelSpans {
//       id
//       traceId
//       spanId
//       name
//       brief
//       type {
//         id
//         name
//         colour
//       }
//       startTimeNano
//       endTimeNano
//       statusCode
//     }
//   }
// `

const OpenTelemetryTracePage = ({ id }: { id: string }) => {
  // const spansQuery = useQuery<GetSpans>(SPANS_QUERY)

  return (
    <>
      <MetaTags
        title="OpenTelemetryTrace"
        description="OpenTelemetryTrace page"
      />

      <Title>OpenTelemetry Trace</Title>
      <Text>ID: {id}</Text>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <div></div>
      </Flex>
    </>
  )
}

export default OpenTelemetryTracePage
