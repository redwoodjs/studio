import { useEffect, useRef, useState } from 'react'

import {
  Title,
  Card,
  Text,
  Flex,
  Button,
  Divider,
  Select,
  SelectItem,
  TextInput,
} from '@tremor/react'
import {
  GetSpans,
  RetypeSpansMutation,
  RetypeSpansMutationVariables,
  TruncateSpansMutation,
  TruncateSpansMutationVariables,
} from 'types/graphql'

import { Metadata, useMutation, useQuery } from '@redwoodjs/web'

import SpanListItem from 'src/components/SpanListItem/SpanListItem'
import { SettingsIcon } from 'src/icons/Icons'

const SPANS_QUERY = gql`
  # Have as a live query
  query GetSpans @live {
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
  const [nameFilter, setNameFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

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
      <Metadata
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
            <SettingsIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
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
          <Text>Filtering</Text>
          <Flex flexDirection="row" justifyContent="between" className="gap-4">
            <TextInput
              placeholder="Name"
              value={nameFilter}
              onChange={(e) => {
                setNameFilter(e.currentTarget.value)
              }}
            />

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectItem value="">ALL</SelectItem>
              <SelectItem value="GRAPHQL">GRAPHQL</SelectItem>
              <SelectItem value="SQL">SQL</SelectItem>
              <SelectItem value="PRISMA">PRISMA</SelectItem>
              <SelectItem value="REDWOOD FUNCTION">FUNCTION</SelectItem>
              <SelectItem value="REDWOOD SERVICE">SERVICE</SelectItem>
              <SelectItem value="GENERIC">GENERIC</SelectItem>
            </Select>
          </Flex>
        </Card>
        {spans.length === 0 && (
          <Card className="w-full">
            <Text>No spans found</Text>
          </Card>
        )}
        {spans
          .filter((span) => !nameFilter || span.name.includes(nameFilter))
          .filter(
            (span) =>
              !typeFilter ||
              span.type.name.toLowerCase().includes(typeFilter.toLowerCase())
          )
          .map((span) => (
            <SpanListItem key={span.id} data={span} />
          ))}
      </Flex>
    </>
  )
}

export default OpenTelemetrySpansPage
