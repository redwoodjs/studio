import { Title, Text, Flex } from '@tremor/react'
import { GetTraces } from 'types/graphql'

import { MetaTags, useQuery } from '@redwoodjs/web'

import TraceListItem from 'src/components/TraceListItem/TraceListItem'

const TRACES_QUERY = gql`
  query GetTraces {
    traces: otelTraces {
      id
      spans {
        id
        name
        brief
        startTimeNano
        endTimeNano
        statusCode
        type {
          name
          colour
        }
      }
    }
  }
`

const OpenTelemetryTracesPage = () => {
  const tracesQuery = useQuery<GetTraces>(TRACES_QUERY)
  const traces = tracesQuery.data?.traces ?? []

  return (
    <>
      <MetaTags
        title="OpenTelemetryTraces"
        description="OpenTelemetryTraces page"
      />

      <Flex flexDirection="row" justifyContent="between">
        <div>
          <Title>OpenTelemetry Traces</Title>
          <Text>Each individual OpenTelemetry trace ingested.</Text>
        </div>
      </Flex>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        {traces.map((trace) => (
          <TraceListItem key={trace.id} id={trace.id} spans={trace.spans} />
        ))}
      </Flex>
    </>
  )
}

export default OpenTelemetryTracesPage
