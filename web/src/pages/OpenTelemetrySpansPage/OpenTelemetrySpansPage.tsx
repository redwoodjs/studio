import { useEffect, useRef, useState } from 'react'

import { CogIcon } from '@heroicons/react/outline'
import { Title, Card, Text, Flex, Button, Divider } from '@tremor/react'
import {
  GetSpans,
  RetypeSpansMutation,
  RetypeSpansMutationVariables,
  TruncateSpansMutation,
  TruncateSpansMutationVariables,
} from 'types/graphql'

import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'

import SpanListItem from 'src/components/SpanListItem/SpanListItem'

const SPANS_QUERY = gql`
  # Have as a live query
  query GetSpans {
    otelSpans {
      id
      traceId
      spanId
      name
      brief
      type {
        id
        name
        colour
      }
      startTimeNano
      endTimeNano
      statusCode
    }
  }
`

const MUTATION_RETYPE_SPANS = gql`
  mutation RetypeSpansMutation {
    otelRetypeSpans
  }
`

const MUTATION_TRUNCATE_SPANS = gql`
  mutation TruncateSpansMutation {
    otelTruncateSpans
  }
`

const OpenTelemetrySpansPage = () => {
  const spansQuery = useQuery<GetSpans>(SPANS_QUERY)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [showModal, setShowModal] = useState(false)

  const spans = spansQuery.data?.otelSpans ?? []

  useEffect(() => {
    if (dialogRef.current?.open && !showModal) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && showModal) {
      dialogRef.current?.showModal()
    }
  }, [showModal, dialogRef.current?.open])

  const [executeRetypeSpans, retypeSpans] = useMutation<
    RetypeSpansMutation,
    RetypeSpansMutationVariables
  >(MUTATION_RETYPE_SPANS)

  const [executeTruncateSpans, truncateSpans] = useMutation<
    TruncateSpansMutation,
    TruncateSpansMutationVariables
  >(MUTATION_TRUNCATE_SPANS)

  return (
    <>
      <MetaTags
        title="OpenTelemetrySpans"
        description="OpenTelemetrySpans page"
      />

      <Flex flexDirection="row" justifyContent="between">
        <div>
          <Title>OpenTelemetry Spans</Title>
          <Text>Each individual OpenTelemetry span ingested.</Text>
        </div>
        <div>
          <Button
            onClick={() => {
              setShowModal(true)
            }}
            className="p-2"
          >
            <CogIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
          </Button>
          <dialog ref={dialogRef}>
            <Card className="w-full">
              <Flex
                flexDirection="col"
                justifyContent="start"
                alignItems="start"
                className="gap-4"
              >
                <Flex
                  flexDirection="row"
                  justifyContent="between"
                  className="gap-8"
                >
                  <Text>Truncate Spans</Text>
                  <Button
                    color="rose"
                    onClick={async () => {
                      await executeTruncateSpans()
                      if (spansQuery.refetch) {
                        await spansQuery.refetch()
                      }
                    }}
                    loading={truncateSpans.loading}
                    loadingText="Executing..."
                    disabled={truncateSpans.loading || retypeSpans.loading}
                  >
                    Execute
                  </Button>
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="between"
                  className="gap-8"
                >
                  <Text>Retype Spans</Text>
                  <Button
                    onClick={() => {
                      executeRetypeSpans()
                    }}
                    loading={retypeSpans.loading}
                    loadingText="Executing..."
                    disabled={retypeSpans.loading || truncateSpans.loading}
                  >
                    Execute
                  </Button>
                </Flex>
                <Divider />
                <Flex flexDirection="row" justifyContent="end">
                  <Button
                    onClick={() => {
                      setShowModal(false)
                    }}
                  >
                    Close
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </dialog>
        </div>
      </Flex>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <Card className="w-full">
          <Text>Filtering/Searching...</Text>
        </Card>
        {spans.map((span) => (
          <SpanListItem key={span.id} data={span} />
        ))}
      </Flex>
    </>
  )
}

export default OpenTelemetrySpansPage
