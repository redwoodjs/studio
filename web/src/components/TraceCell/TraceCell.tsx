import { useContext } from 'react'

import {
  Grid,
  Col,
  Card,
  Text,
  Title,
  Flex,
  Switch,
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
import { ClockIcon, MapIcon } from 'src/icons/Icons'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'
import { SpanLink } from '../SpanLink/SpanLink'
import TraceTimeline from '../TraceTimeline/TraceTimeline'
import TraceTreeMap from '../TraceTreeMap/TraceTreeMap'

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
    traceTreeMapData: otelTraceTreeMapData(id: $id)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindTraceQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  trace,
  traceTreeMapData,
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
                  <Tab icon={ClockIcon}>Timeline</Tab>
                  <Tab icon={MapIcon}>Map</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="mt-4">
                      <TraceTimeline trace={trace} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-4">
                      <div className="h-[500px] min-h-[500px]">
                        <TraceTreeMap data={traceTreeMapData} />
                      </div>
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
                <span>Duration (ns)</span>
                <span>{durationNano.toLocaleString()}</span>
              </ListItem>
              <ListItem>
                <span>Duration (msec)</span>
                <span>{(durationNano / 1_000_000.0).toLocaleString()}</span>
              </ListItem>
              <ListItem>
                <span>Duration (sec)</span>
                <span>{(durationNano / 1_000_000_000.0).toLocaleString()}</span>
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
