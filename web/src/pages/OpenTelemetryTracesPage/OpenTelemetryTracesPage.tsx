import { Title, Text, Flex, Card } from '@tremor/react'
import { GetTraces } from 'types/graphql'

import { Metadata, useQuery } from '@redwoodjs/web'

import TraceListItem from 'src/components/TraceListItem/TraceListItem'

const TRACES_QUERY = gql`
  query GetTraces @live {
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
      <Metadata
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
        {traces.length === 0 && (
          <Card className="w-full">
            <Text>No traces found</Text>
          </Card>
        )}
        {traces.map((trace) => (
          <TraceListItem key={trace.id} id={trace.id} spans={trace.spans} />
        ))}
      </Flex>
    </>
  )
}

export default OpenTelemetryTracesPage
