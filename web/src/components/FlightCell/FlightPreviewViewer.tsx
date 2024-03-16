import { Card, DonutChart, List, ListItem } from '@tremor/react'
import type { FlightPreview } from 'types/graphql'

import { FlightResponseChunkDebugInfo } from 'src/components/RscParser/components/FlightResponseChunkDebugInfo'
import { FlightResponseChunkHint } from 'src/components/RscParser/components/FlightResponseChunkHint'
import { FlightResponseChunkModel } from 'src/components/RscParser/components/FlightResponseChunkModel'
import { FlightResponseChunkModule } from 'src/components/RscParser/components/FlightResponseChunkModule'
import { FlightResponseChunkRaw } from 'src/components/RscParser/components/FlightResponseChunkRaw'
import { FlightResponseChunkText } from 'src/components/RscParser/components/FlightResponseChunkText'
import { FlightResponseChunkUnknown } from 'src/components/RscParser/components/FlightResponseChunkUnknown'
import { createFlightResponse } from 'src/components/RscParser/createFlightResponse'
import type { Chunk } from 'src/components/RscParser/react/ReactFlightClient'
import type { RscChunkMessage } from 'src/components/RscParser/types'

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
  const performance = preview.flight.performance
  const metadata = preview.flight.metadata
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
      <div className="grid grid-cols-2 gap-4">
        <FlightBreakdownOverview
          data={data}
          metadata={metadata}
          performance={performance}
        />
        <Card>
          <h3 className="mb-4 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Flight Payload -{' '}
            {((performance?.sizeInBytes || 0) / 1_024.0).toFixed(3)} kb
          </h3>
          <div
            className="border-1 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {payload}
          </div>
          <h4 className="font-small mt-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Flight render duration: {performance?.duration.toFixed(3) || 0} ms
          </h4>
        </Card>
      </div>
      <div className="my-4">
        <h2 className="text-md mb-4 font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Chunk Breakdown and Details -{' '}
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

const FlightBreakdownOverview = ({ data, metadata, performance }) => {
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
    <Card>
      <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Preview for {metadata?.rsc?.rscId || metadata?.rsc?.rsfId || 'Unknown'}
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

      <h4 className="font-small mt-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Flight requested at: {performance?.startedAt}
      </h4>
    </Card>
  )
}
