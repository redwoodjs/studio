import { Flex, List, ListItem } from '@tremor/react'
import { toDate, formatISO } from 'date-fns'

import { routes } from '@redwoodjs/router'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

export const SpanMetadata = ({
  spanId,
  traceId,
  parentId,
  name,
  kind,
  statusCode,
  statusMessage,
  startTimeNano,
  endTimeNano,
}: {
  spanId: string
  traceId: string
  parentId: string
  name: string
  kind: number
  statusCode: number
  statusMessage: string
  startTimeNano: string
  endTimeNano: string
}) => {
  const durationNano = Number(BigInt(endTimeNano) - BigInt(startTimeNano))

  let statusCodeComp = <span className="italic">Unknown: {statusCode}</span>
  switch (statusCode.toString()) {
    case '0':
      statusCodeComp = <span>Unset</span>
      break
    case '1':
      statusCodeComp = <span>OK</span>
      break
    case '2':
      statusCodeComp = <span>Error</span>
      break
  }

  let kindComp = <span className="italic">Unknown: {kind}</span>
  switch (kind.toString()) {
    case '0':
      kindComp = <span>Internal</span>
      break
    case '1':
      kindComp = <span>Server</span>
      break
    case '2':
      kindComp = <span>Client</span>
      break
    case '3':
      kindComp = <span>Producer</span>
      break
    case '4':
      kindComp = <span>Consumer</span>
      break
  }

  return (
    <List>
      <ListItem>
        <span>Span ID</span>
        <Flex flexDirection="row" className="gap-1" justifyContent="end">
          <LinkingIcon to={routes.opentelemetrySpan({ id: spanId })} />
          <span>{spanId}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <span>Trace ID</span>
        <Flex flexDirection="row" className="gap-1" justifyContent="end">
          <LinkingIcon to={routes.opentelemetryTrace({ id: traceId })} />
          <span>{traceId}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <span>Parent ID</span>
        {parentId ? (
          <Flex flexDirection="row" className="gap-1" justifyContent="end">
            <LinkingIcon to={routes.opentelemetrySpan({ id: parentId })} />
            <span>{parentId}</span>
          </Flex>
        ) : (
          <span>-</span>
        )}
      </ListItem>
      <ListItem>
        <span>Name</span>
        <span>{name}</span>
      </ListItem>
      <ListItem>
        <span>Kind</span>
        {kindComp}
      </ListItem>
      <ListItem>
        <span>Status Code</span>
        {statusCodeComp}
      </ListItem>
      <ListItem>
        <span>Status Message</span>
        <span>{statusMessage ?? '-'}</span>
      </ListItem>
      <ListItem>
        <span>Started At</span>
        <span>
          {formatISO(toDate(parseInt(startTimeNano) / 1_000_000_000.0))}
        </span>
      </ListItem>
      <ListItem>
        <span>Ended At</span>
        <span>
          {formatISO(toDate(parseInt(endTimeNano) / 1_000_000_000.0))}
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
  )
}
