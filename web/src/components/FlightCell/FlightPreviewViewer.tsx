import { Card, DonutChart, List, ListItem } from '@tremor/react'
import type { FlightPreview } from 'types/graphql'

import { FlightResponseChunkDebugInfo } from 'src/rscParser/components/FlightResponseChunkDebugInfo'
import { FlightResponseChunkHint } from 'src/rscParser/components/FlightResponseChunkHint'
import { FlightResponseChunkModel } from 'src/rscParser/components/FlightResponseChunkModel'
import { FlightResponseChunkModule } from 'src/rscParser/components/FlightResponseChunkModule'
import { FlightResponseChunkRaw } from 'src/rscParser/components/FlightResponseChunkRaw'
import { FlightResponseChunkText } from 'src/rscParser/components/FlightResponseChunkText'
import { FlightResponseChunkUnknown } from 'src/rscParser/components/FlightResponseChunkUnknown'
import { createFlightResponse } from 'src/rscParser/createFlightResponse'
import type { Chunk } from 'src/rscParser/react/ReactFlightClient'
import type { RscChunkMessage } from 'src/rscParser/types'

const ChunkComponent = ({ chunk }: { chunk: Chunk }) => {
  switch (chunk.type) {
    case 'model': {
      return (
        <FlightResponseChunkModel
          data={chunk.value}
          onClickID={(id) => {
            alert(id)
          }}
        />
      )
    }
    case 'module': {
      return <FlightResponseChunkModule data={chunk.value} />
    }
    case 'hint': {
      return <FlightResponseChunkHint data={chunk.value} />
    }
    case 'text':
      return <FlightResponseChunkText data={chunk.value} />
    case 'debugInfo':
      return <FlightResponseChunkDebugInfo data={chunk.value} />
    default: {
      return <FlightResponseChunkUnknown chunk={chunk} />
    }
  }
}

type Props = {
  preview: FlightPreview
}

export const FlightPreviewViewer = ({ preview }: Props) => {
  const payload = preview.flight.payload
  const messages = [
    {
      type: 'RSC_CHUNK',
      tabId: 0,
      data: {
        fetchUrl: 'https://example.com',
        fetchHeaders: {
          'Content-Type': 'application/json',
        },
        fetchStartTime: 0,
        chunkStartTime: 0,
        chunkEndTime: 0,
        chunkValue: Array.from(new TextEncoder().encode(payload)),
      },
    } satisfies RscChunkMessage,
  ]

  const flightResponse = createFlightResponse(messages)

  const data = flightResponse._chunks?.map((chunk, idx) => {
    let amount = 0

    const calculateAmount = (chunk) => {
      if (typeof chunk.originalValue === 'string') {
        return chunk.originalValue.length
      } else if (typeof chunk.originalValue === 'object') {
        return JSON.stringify(chunk.originalValue, null, 2).length
      } else {
        return chunk.value?.length || 0
      }
    }

    switch (chunk.type) {
      case 'model': {
        amount = calculateAmount(chunk)
        break
      }
      case 'module': {
        amount = calculateAmount(chunk)
        break
      }
      case 'hint': {
        amount = calculateAmount(chunk)
        break
      }
      case 'text':
        amount = calculateAmount(chunk)
        break
      case 'debugInfo':
        amount = calculateAmount(chunk)
        break
      default: {
        amount = 0
        break
      }
    }

    function getColorForIndex(index) {
      // Define the arrays for colors and number values.
      const colors = [
        'indigo',
        'sky',
        'cyan',
        'purple',
        'teal',
        'rose',
        'amber',
        'lime',
      ]
      const values = [500, 400, 300]

      // Calculate the total combinations of colors and values.
      const totalCombinations = colors.length * values.length

      // Use modular arithmetic to ensure the index cycles through the combinations.
      const cycleIndex = (index - 1) % totalCombinations // Subtract 1 to make it 0-based.

      // Calculate the current value and color index based on the new requirements.
      const valueIndex = Math.floor(cycleIndex / colors.length)
      const colorIndex = cycleIndex % colors.length

      // Return the color string.
      return `bg-${colors[colorIndex]}-${values[valueIndex]}`
    }

    return {
      name: chunk.type,
      amount,
      share: `${(
        (amount / preview.flight.performance.sizeInBytes) *
        100
      ).toFixed(2)}%`,
      color: getColorForIndex(idx + 1),
    }
  })

  return (
    <div className="space-y-4">
      <FlightBreakdownOverview data={data} />
      <div className="m-4">
        {flightResponse._chunks?.map((chunk: Chunk, idx) => {
          return (
            <Card key={idx} className="my-4 space-y-4">
              <h3 className="text-lg font-semibold">{chunk.type}</h3>
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
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const kilobyteFormatter = (number) => {
  return `${(number / 1_024).toFixed(3)} KB`
}

const FlightBreakdownOverview = ({ data }) => {
  function extractColors(data) {
    return data
      .map((item) => {
        const match = item.color.match(/bg-(.*?)-\d+/)
        return match ? match[1] : null
      })
      .filter((color) => color !== null) // This line removes any null values if a match wasn't found
  }

  const colors = extractColors(data)

  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Flight overview by chunk
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
          valueFormatter={kilobyteFormatter}
          showTooltip={true}
          colors={colors}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Chunk</span>
          <span>Size / Share</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'h-2.5 w-2.5 shrink-0 rounded-sm'
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {kilobyteFormatter(item.amount)}
                </span>
                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}
