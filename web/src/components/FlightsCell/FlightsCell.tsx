import { Card, List, ListItem } from '@tremor/react'
import { parse, parseISO, formatDistanceToNow } from 'date-fns'
import type {
  FlightsPreviewQuery,
  FlightsPreviewQueryVariables,
} from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Tracker from 'src/components/Vizualization/Tracker/Tracker'
import { FlightIcon } from 'src/icons/Icons'
import type { RscChunkMessage } from 'src/rscParser/types'

interface RscChunkMessageDataExtended {
  fetchUrl: string
  fetchHeaders: Record<string, string | undefined>
  fetchStartTime: number
  chunkValue: number[]
  chunkStartTime: number
  chunkEndTime: number
  chunkDuration: number
  sizeInBytes: number
}

interface RscChunkMessageExtended extends RscChunkMessage {
  data: RscChunkMessageDataExtended
}

export const QUERY: TypedDocumentNode<
  FlightsPreviewQuery,
  FlightsPreviewQueryVariables
> = gql`
  query FlightsPreviewQuery {
    flightsPreview {
      id
      status
      statuses
      startedAt
      endedAt
      hostname
      caption
      flights {
        id
        preview
        payload
        createdAt
        metadata
        performance {
          startedAt
          endedAt
          duration
          sizeInBytes
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  flightsPreview,
}: CellSuccessProps<FlightsPreviewQuery>) => {
  const { status, statuses, startedAt, endedAt, hostname, caption, flights } =
    flightsPreview
  const messages = flights.map((flight) => {
    const payload = flight.payload
    const metadata = flight.metadata
    const performance = flight.performance
    return {
      type: 'RSC_CHUNK',
      tabId: 0,
      data: {
        fetchUrl: metadata?.['request']?.['url'] || '',
        fetchHeaders: metadata?.['request']?.['headers'] || {},
        fetchStartTime: 0,
        chunkStartTime: parseISO(performance.startedAt).getTime(),
        chunkEndTime: parseISO(performance.endedAt).getTime(),
        chunkDuration: performance.duration,
        chunkValue: Array.from(new TextEncoder().encode(payload)),
        sizeInBytes: performance.sizeInBytes / 1_024.0,
      },
    } satisfies RscChunkMessageExtended
  })

  const data = flights.map((flight) => {
    return {
      status: 'OK',
      tooltip: flight.preview,
      to: routes.flight({ id: flight.id }),
    }
  })

  const colorMapping = {
    OK: 'emerald-500',
    ERROR: 'red-500',
    WARN: 'gray-300',
  }

  const combinedData = data.map((item) => {
    return {
      ...item,
      color: colorMapping[item.status],
    }
  })

  return (
    <>
      <>
        <Card>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Flight Previews
            </h3>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-tremor-full px-3 py-1 text-tremor-default text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring dark:text-dark-tremor-content-emphasis dark:ring-dark-tremor-ring">
              <span
                className="-ml-0.5 h-2 w-2 rounded-tremor-full bg-emerald-500"
                aria-hidden={true}
              />
              {status}
            </span>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <FlightIcon
                className="h-5 w-5 shrink-0 text-emerald-500"
                aria-hidden={true}
              />
              <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {hostname}
              </p>
            </div>
            <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {caption}
            </p>
          </div>
          <Tracker data={combinedData} className="mt-4 w-full lg:flex" />
          <div className="mt-3 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <span>
              {formatDistanceToNow(parseISO(startedAt), {
                includeSeconds: true,
                addSuffix: true,
              })}
            </span>
            <span>
              {formatDistanceToNow(parseISO(endedAt), {
                includeSeconds: true,
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {statuses.map((status) => {
              return (
                <span
                  key={status}
                  className="inline-flex items-center gap-x-2 rounded-tremor-small bg-tremor-background-subtle px-2 py-0.5 text-tremor-default text-tremor-content dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis"
                >
                  <span className="h-2 w-2 rounded-tremor-full bg-emerald-500" />
                  {status}
                </span>
              )
            })}
          </div>
          <h3 className="mt-6 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Flight overview ({messages.length})
          </h3>

          <List>
            {messages
              .slice()
              .reverse()
              .map((message, idx) => {
                const data = message?.['data']

                if (data === undefined) {
                  return
                }

                return (
                  <ListItem key={idx}>
                    <span>{data.fetchUrl}</span>
                    <span>
                      {formatDistanceToNow(data.chunkStartTime, {
                        includeSeconds: true,
                        addSuffix: true,
                      })}
                    </span>
                    <span>{data.chunkDuration.toFixed(3)}msec</span>
                    <span>{data.sizeInBytes.toFixed(3)}kB</span>
                  </ListItem>
                )
              })}
          </List>
        </Card>
      </>
    </>
  )
}
