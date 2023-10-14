import { Title, Card, Text, Flex } from '@tremor/react'
import { GetSpans } from 'types/graphql'

import { MetaTags, useQuery } from '@redwoodjs/web'

import SpanListItem from 'src/components/SpanListItem/SpanListItem'

const SPANS_QUERY = gql`
  query GetSpans @live {
    opentelemetrySpans {
      id
      traceId
      attributes {
        id
        key
      }
    }
  }
`

const OpenTelemetrySpansPage = () => {
  const spansQuery = useQuery<GetSpans>(SPANS_QUERY)

  const spans = spansQuery.data?.opentelemetrySpans ?? []

  return (
    <>
      <MetaTags
        title="OpenTelemetrySpans"
        description="OpenTelemetrySpans page"
      />

      <Title>OpenTelemetry Spans</Title>
      <Text>Each individual OpenTelemetry span ingested.</Text>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <Card className="w-full">
          <Text>Filtering/Searching...</Text>
        </Card>
        {spans.map((span) => (
          <SpanListItem key={span.id} id={span.id} traceId={span.traceId} />
        ))}
      </Flex>
    </>
  )
}

export default OpenTelemetrySpansPage
