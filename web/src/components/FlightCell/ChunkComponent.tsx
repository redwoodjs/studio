import { FlightResponseChunkDebugInfo } from 'src/components/RscParser/components/FlightResponseChunkDebugInfo'
import { FlightResponseChunkHint } from 'src/components/RscParser/components/FlightResponseChunkHint'
import { FlightResponseChunkModel } from 'src/components/RscParser/components/FlightResponseChunkModel'
import { FlightResponseChunkModule } from 'src/components/RscParser/components/FlightResponseChunkModule'
import { FlightResponseChunkText } from 'src/components/RscParser/components/FlightResponseChunkText'
import { FlightResponseChunkUnknown } from 'src/components/RscParser/components/FlightResponseChunkUnknown'
import type { Chunk } from 'src/components/RscParser/react/ReactFlightClient'

import type { ComponentRefs } from './ChunkBreakdownDetails'

export const ChunkComponent = ({
  chunk,
  componentRefs,
}: {
  chunk: Chunk
  componentRefs: ComponentRefs
}) => {
  console.log(componentRefs)
  const onClickID = (id) => {
    const element = componentRefs[id]

    if (element && element.scrollIntoView) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  switch (chunk.type) {
    case 'action':
    case 'model': {
      return (
        <FlightResponseChunkModel
          data={chunk.value}
          onClickID={(id) => onClickID(id)}
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
