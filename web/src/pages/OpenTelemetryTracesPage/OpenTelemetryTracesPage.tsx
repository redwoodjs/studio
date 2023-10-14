import { Title, Card, Text, Flex } from '@tremor/react'
import { GetTraceIds } from 'types/graphql'

import { MetaTags, useQuery } from '@redwoodjs/web'

import SpanListItem from 'src/components/SpanListItem/SpanListItem'

const TRACES_QUERY = gql`
  # Have as a live query
  query GetTraceIds {
    otelTraceIds
  }
`

const OpenTelemetryTracesPage = () => {
  const tracesQuery = useQuery<GetTraceIds>(TRACES_QUERY)

  const traces = tracesQuery.data?.otelTraceIds ?? []

  return (
    <>
      <MetaTags
        title="OpenTelemetryTraces"
        description="OpenTelemetryTraces page"
      />

      <Title>OpenTelemetry Traces</Title>
      <Text>Each individual OpenTelemetry trace ingested.</Text>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <Card className="w-full">
          <Text>Filtering/Searching...</Text>
        </Card>
        {traces.map((traceId) => (
          <SpanListItem key={traceId} data={{ traceId }} />
        ))}
      </Flex>
    </>
  )
}

export default OpenTelemetryTracesPage
