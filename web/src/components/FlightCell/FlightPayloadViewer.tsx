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
  console.log(chunk.type)
  console.log(chunk['type'])
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

export const FlightPayloadViewer = ({ payload }) => {
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

  return (
    <>
      <div className="m-4 grid gap-4 p-4">
        {flightResponse._chunks?.map((chunk: Chunk, idx) => {
          console.log(chunk)
          return (
            <>
              <div
                key={idx}
                className="space-y-4 border-2 border-black bg-slate-300 p-2"
              >
                <FlightResponseChunkRaw data={chunk} />
                <p>{chunk.type}</p>
              </div>
              <ChunkComponent chunk={chunk} />
            </>
          )
        })}
      </div>
    </>
  )
}
