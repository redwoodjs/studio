import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
import { formatDistanceToNow, parseISO } from 'date-fns'

import { Link, routes } from '@redwoodjs/router'

import type { RscChunkMessage } from 'src/components/RscParser/types'

interface RscChunkMessageDataExtended {
  id: string
  preview: string
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

export const FlightsTable = ({ flightsPreview }) => {
  const messages = flightsPreview.flights.map((flight) => {
    const { preview, payload, metadata, performance } = flight

    return {
      type: 'RSC_CHUNK',
      tabId: 0,
      data: {
        id: flight.id,
        preview: preview,
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

  return (
    <Card className="mx-auto mt-4 w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Preview</TableHeaderCell>
            <TableHeaderCell className="text-right">When</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Duration (ms)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Size (kb)</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {messages
            .slice()
            .reverse()
            .map((message, idx) => {
              const data = message?.['data']

              if (data === undefined) {
                return
              }

              return (
                <TableRow key={idx}>
                  <TableCell>
                    <Link
                      to={routes.flight({ id: data.id })}
                      className="font-semibold text-tremor-content hover:text-tremor-brand dark:text-tremor-content-emphasis dark:hover:text-dark-tremor-brand"
                    >
                      {data.preview} - {data.fetchUrl}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatDistanceToNow(data.chunkStartTime, {
                      includeSeconds: true,
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {data.chunkDuration.toFixed(3)}
                  </TableCell>
                  <TableCell className="text-right">
                    {data.sizeInBytes.toFixed(3)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </Card>
  )
}
