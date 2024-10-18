import type { FlightPreview } from 'types/graphql'

import { createFlightResponse } from 'src/components/RscParser/createFlightResponse'
import type { RscChunkMessage } from 'src/components/RscParser/types'

import { ChunkBreakdownDetails } from './ChunkBreakdownDetails'
import { FlightBreakdownOverview } from './FlightBreakdownOverview'
import { FlightPayloadOverview } from './FlightPayloadOverview'

const COLORS = [
  'indigo',
  'sky',
  'cyan',
  'purple',
  'teal',
  'rose',
  'amber',
  'lime',
]

const COLOR_VARIANTS = [500, 400, 300]

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
      case 'model':
      case 'module':
      case 'hint':
      case 'text':
      case 'debugInfo': {
        amount = calculateAmount(chunk)
        break
      }
      default: {
        amount = 0
        break
      }
    }

    const getColorForIndex = (index) => {
      const totalCombinations = COLORS.length * COLOR_VARIANTS.length
      const cycleIndex = index % totalCombinations // Subtract 1 to make it 0-based.
      const valueIndex = Math.floor(cycleIndex / COLORS.length)
      const colorIndex = cycleIndex % COLORS.length

      return `bg-${COLORS[colorIndex]}-${COLOR_VARIANTS[valueIndex]}`
    }

    const share = `${(
      (amount / preview.flight.performance.sizeInBytes) *
      100
    ).toFixed(2)}%`

    return {
      name: `${chunk.type} ${chunk.id}`,
      amount,
      share,
      color: getColorForIndex(idx),
    }
  })

  return { flightResponse, data }
}

export const FlightPreviewViewer = ({ preview }: Props) => {
  const metadata = preview.flight.metadata
  const { flightResponse, data } = buildFlightPreviewData({ preview })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
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
