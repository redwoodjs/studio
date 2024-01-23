import { useContext } from 'react'

import {
  Grid,
  Col,
  Card,
  Text,
  Title,
  Flex,
  Button,
  Switch,
} from '@tremor/react'
import type { FindSpanQuery, FindSpanQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SpanGenericToggleContext } from 'src/context/SpanGenericToggleContext'
import { TracesIcon } from 'src/icons/Icons'

import SpanAncestorsCell from '../SpanAncestorsCell'
import { SpanAttribute } from '../SpanAttribute/SpanAttribute'
import SpanDescendantsCell from '../SpanDescendantsCell'
import { SpanEvent } from '../SpanEvent/SpanEvent'
import { SpanMetadata } from '../SpanMetadata/SpanMetadata'
import { SpanResource } from '../SpanResource/SpanResource'

export const QUERY = gql`
  query FindSpanQuery($id: String!) {
    span: otelSpan(id: $id) {
      id
      spanId
      traceId
      name
      kind
      attributes {
        id
        key
        value
        type
      }
      parentId
      resource {
        attributes {
          id
          key
          value
          type
        }
      }
      startTimeNano
      endTimeNano
      type {
        id
        name
        colour
      }
      statusCode
      statusMessage
      events {
        id
        name
        attributes {
          id
          key
          value
          type
        }
        startTimeNano
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSpanQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  span,
}: CellSuccessProps<FindSpanQuery, FindSpanQueryVariables>) => {
  const { show, setShow } = useContext(SpanGenericToggleContext)
  return (
    <>
      <Flex flexDirection="row" className="gap-x-4">
        <div className="flex-grow">
          <Title>OpenTelemetry Span</Title>
          <Text>ID: {span.spanId}</Text>
        </div>
        <div>
          <Link to={routes.opentelemetryTrace({ id: span.traceId })}>
            <Button className="p-2">
              <TracesIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Flex>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <Grid numItems={1} numItemsLg={3} className="w-full min-w-full gap-4">
          <Col numColSpan={1} numColSpanLg={2}>
            <Card className="overflow-x-scroll">
              <Title>Attributes</Title>
              <Flex
                flexDirection="col"
                className="gap-2"
                justifyContent="start"
                alignItems="start"
              >
                {span.attributes.length > 0 ? (
                  span.attributes.map(({ key, value, type }) => {
                    return (
                      <SpanAttribute
                        key={key}
                        keyName={key}
                        value={value}
                        type={type}
                      />
                    )
                  })
                ) : (
                  <Text>No attributes...</Text>
                )}
              </Flex>
            </Card>
          </Col>
          <Col numColSpan={1} numColSpanLg={1}>
            <div className="space-y-4">
              <Card>
                <Flex flexDirection="row" justifyContent="between">
                  <Title>Ancestors</Title>
                  <Switch
                    id="switch"
                    name="switch"
                    checked={show.ancestors}
                    onChange={(v) => setShow({ ...show, ancestors: v })}
                  />
                </Flex>
                <SpanAncestorsCell id={span.spanId} />
              </Card>
              <Card>
                <Flex flexDirection="row" justifyContent="between">
                  <Title>Descendants</Title>
                  <Switch
                    id="switch"
                    name="switch"
                    checked={show.descendants}
                    onChange={(v) => setShow({ ...show, descendants: v })}
                  />
                </Flex>
                <SpanDescendantsCell id={span.spanId} />
              </Card>
            </div>
          </Col>
          <Card>
            <Title>Metadata</Title>
            <SpanMetadata
              spanId={span.spanId}
              traceId={span.traceId}
              parentId={span.parentId}
              name={span.name}
              kind={span.kind}
              statusCode={span.statusCode}
              statusMessage={span.statusMessage}
              startTimeNano={span.startTimeNano}
              endTimeNano={span.endTimeNano}
            />
          </Card>
          <Card>
            <Title>Resources</Title>
            <SpanResource resource={span.resource} />
          </Card>
          <Card>
            <Title>Events</Title>
            <Flex
              flexDirection="col"
              className="gap-2"
              justifyContent="start"
              alignItems="start"
            >
              {span.events.length > 0 ? (
                span.events.map((event) => (
                  <SpanEvent
                    key={event.startTimeNano + event.name}
                    name={event.name}
                    attributes={event.attributes}
                    startTimeNano={event.startTimeNano}
                  />
                ))
              ) : (
                <Text>No events...</Text>
              )}
            </Flex>
          </Card>
        </Grid>
      </Flex>
    </>
  )
}
