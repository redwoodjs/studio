import { useRef } from 'react'

import { Card } from '@tremor/react'

import { FlightResponseChunkRaw } from 'src/components/RscParser/components/FlightResponseChunkRaw'
import type { Chunk } from 'src/components/RscParser/react/ReactFlightClient'

import { ChunkComponent } from './ChunkComponent'

export type ComponentRefs = {
  [key: string]: HTMLElement | null
}

export const ChunkBreakdownDetails = ({ preview, flightResponse, data }) => {
  const componentRefs = useRef<ComponentRefs>({}).current

  const metadata = preview.flight?.metadata
  const text = metadata?.rsc?.rscId || metadata?.rsc?.rsfId || 'Unknown'
  return (
    <>
      <h2 className="text-md mb-4 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {text} Chunk Preview
      </h2>

      {flightResponse._chunks?.map((chunk: Chunk, idx) => {
        return (
          <Card
            key={idx}
            className="my-4 space-y-4"
            ref={(el) => (componentRefs[chunk.id] = el)}
            id={chunk.id}
          >
            <h3
              className={`space-x-2 border-l-4 pl-2 text-lg font-semibold ${data[
                idx
              ].color.replace('bg', 'border')}`}
            >
              {chunk.type} {chunk.id}
            </h3>
            <div>
              <h3 className="text-md mb-3 text-tremor-default font-semibold dark:text-tremor-content">
                Raw
              </h3>
              <div
                key={idx}
                className="border-1 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring"
              >
                <FlightResponseChunkRaw data={chunk} />
              </div>
            </div>
            <div>
              <h3 className="text-md mb-3 text-tremor-default font-semibold dark:text-tremor-content">
                Pretty
              </h3>
              <div className="relative rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring">
                <ChunkComponent chunk={chunk} componentRefs={componentRefs} />
              </div>
            </div>
          </Card>
        )
      })}
    </>
  )
}
