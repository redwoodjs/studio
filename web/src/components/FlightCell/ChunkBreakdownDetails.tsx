import { Card } from '@tremor/react'

import { FlightResponseChunkRaw } from 'src/components/RscParser/components/FlightResponseChunkRaw'
import type { Chunk } from 'src/components/RscParser/react/ReactFlightClient'

import { ChunkComponent } from './ChunkComponent'

export const ChunkBreakdownDetails = ({ preview, flightResponse, data }) => {
  const metadata = preview.flight?.metadata
  return (
    <>
      <h2 className="text-md mb-4 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Chunk Breakdown and Details for{' '}
        {metadata?.rsc?.rscId || metadata?.rsc?.rsfId || 'Unknown'}
      </h2>

      {flightResponse._chunks?.map((chunk: Chunk, idx) => {
        return (
          <Card key={idx} className="my-4 space-y-4">
            <h3
              className={`space-x-2 border-l-4 pl-2 text-lg font-semibold ${data[
                idx
              ].color.replace('bg', 'border')}`}
            >
              {chunk.type}
            </h3>
            <div
              key={idx}
              className="border-1 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring"
            >
              <FlightResponseChunkRaw data={chunk} />
            </div>
            <div className="relative mt-3 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring">
              <ChunkComponent chunk={chunk} />
            </div>
          </Card>
        )
      })}
    </>
  )
}
