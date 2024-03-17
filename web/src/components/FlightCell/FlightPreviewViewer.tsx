import type { FlightPreview } from 'types/graphql'

import { createFlightResponse } from 'src/components/RscParser/createFlightResponse'
import type { RscChunkMessage } from 'src/components/RscParser/types'

import { ChunkBreakdownDetails } from './ChunkBreakdownDetails'
import { FlightBreakdownOverview } from './FlightBreakdownOverview'
import { FlightPayloadOverview } from './FlightPayloadOverview'

type Props = {
  preview: FlightPreview
}

const createFlightResponseFromPreview = (preview: FlightPreview) => {
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

  return createFlightResponse(messages)
}

const buildFlightPreviewData = ({ preview }) => {
  const flightResponse = createFlightResponseFromPreview(preview)

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

  return { flightResponse, data }
}

export const FlightPreviewViewer = ({ preview }: Props) => {
  const metadata = preview.flight.metadata
  const { flightResponse, data } = buildFlightPreviewData({ preview })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FlightBreakdownOverview data={data} metadata={metadata} />
        <FlightPayloadOverview preview={preview} />
      </div>
      <div className="my-4">
        <ChunkBreakdownDetails
          preview={preview}
          flightResponse={flightResponse}
          data={data}
        />
      </div>
    </div>
  )
}
