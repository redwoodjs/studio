import { useContext } from 'react'

import { ClockIcon, MapIcon } from '@heroicons/react/outline'
import {
  Grid,
  Col,
  Card,
  Text,
  Title,
  Flex,
  Switch,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  List,
  ListItem,
} from '@tremor/react'
import type { FindTraceQuery, FindTraceQueryVariables } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SpanGenericToggleContext } from 'src/context/SpanGenericToggleContext'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'
import { SpanLink } from '../SpanLink/SpanLink'

export const QUERY = gql`
  query FindTraceQuery($id: String!) {
    trace: otelTrace(id: $id) {
      id
      spans {
        id
        spanId
        parentId
        name
        type {
          id
          name
          colour
        }
        startTimeNano
        endTimeNano
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindTraceQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  trace,
}: CellSuccessProps<FindTraceQuery, FindTraceQueryVariables>) => {
  const { show, setShow } = useContext(SpanGenericToggleContext)

  const sortedSpans = [...trace.spans].sort((a, b) => {
    const aStartTime = BigInt(a.startTimeNano)
    const bStartTime = BigInt(b.startTimeNano)
    return aStartTime < bStartTime ? -1 : aStartTime > bStartTime ? 1 : 0
  })
  const startTimeNano = BigInt(sortedSpans[0].startTimeNano)
  const endTimeNano = BigInt(sortedSpans[sortedSpans.length - 1].endTimeNano)
  const durationNano = Number(endTimeNano - startTimeNano)

  return (
    <>
      <Flex flexDirection="row" className="gap-x-4">
        <div className="flex-grow">
          <Title>OpenTelemetry Trace</Title>
          <Text>ID: {trace.id}</Text>
        </div>
        <div>
          {/* <Link to={routes.opentelemetryTrace({ id: span.traceId })}>
            <Button className="p-2">
              <CubeTransparentIcon
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
            </Button>
          </Link> */}
        </div>
      </Flex>

      <Flex className="mt-6 space-y-6" flexDirection="col">
        <Grid numItems={1} numItemsLg={3} className="w-full min-w-full gap-4">
          <Col numColSpan={1} numColSpanLg={3}>
            <Card className="overflow-x-scroll">
              <TabGroup>
                <TabList>
                  <Tab icon={MapIcon}>Map</Tab>
                  <Tab icon={ClockIcon}>Timeline</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="mt-4">
                      <Flex>
                        <Text className="w-full">Product Y</Text>
                        <Flex className="space-x-2" justifyContent="end">
                          <Text>$ 108,799</Text>
                          <Text>38%</Text>
                        </Flex>
                      </Flex>
                      <ProgressBar value={38} className="mt-2" />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-4">
                      <Flex>
                        <Text className="w-full">Product Z</Text>
                        <Flex className="space-x-2" justifyContent="end">
                          <Text>$ 99,484</Text>
                          <Text>16%</Text>
                        </Flex>
                      </Flex>
                      <ProgressBar value={12} className="mt-2" />
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Card>
          </Col>
          <Card>
            <Title>Metadata</Title>
            <List>
              <ListItem>
                <span>Trace ID</span>
                <Flex
                  flexDirection="row"
                  className="gap-1"
                  justifyContent="end"
                >
                  <LinkingIcon
                    to={routes.opentelemetryTrace({ id: trace.id })}
                  />
                  <span>{trace.id}</span>
                </Flex>
              </ListItem>
              <ListItem>
                <span>Span Count</span>
                <span>{trace.spans.length}</span>
              </ListItem>
              <ListItem>
                <span>Root Span Count</span>
                <span>
                  {trace.spans.filter((span) => span.parentId == null).length}
                </span>
              </ListItem>
              <ListItem>
                <span>Start (ns)</span>
                <span>{startTimeNano.toString()}</span>
              </ListItem>
              <ListItem>
                <span>End (ns)</span>
                <span>{endTimeNano.toString()}</span>
              </ListItem>
              <ListItem>
                <span>Duration (ns)</span>
                <span>{durationNano.toLocaleString()}</span>
              </ListItem>
            </List>
          </Card>
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Flex flexDirection="row" justifyContent="between">
                <Title>Spans</Title>
                <Switch
                  id="switch"
                  name="switch"
                  checked={show.descendants}
                  onChange={(v) => setShow({ ...show, descendants: v })}
                />
              </Flex>
              <Flex
                flexDirection="col"
                className="mt-4 max-h-[100vh] gap-2 overflow-y-scroll p-2"
              >
                {trace.spans
                  .filter(
                    (span) => span.type.id !== 'GENERIC' || show.descendants
                  )
                  .sort((a, b) => {
                    const aTime = BigInt(a.startTimeNano)
                    const bTime = BigInt(b.startTimeNano)
                    if (aTime < bTime) {
                      return -1
                    }
                    if (aTime > bTime) {
                      return 1
                    }
                    return a.name.localeCompare(b.name)
                  })
                  .map((span) => (
                    <SpanLink
                      key={span.id}
                      id={span.spanId}
                      name={span.name}
                      type={span.type}
                    />
                  ))}
              </Flex>
            </Card>
          </Col>
        </Grid>
      </Flex>
    </>
  )
}
