import { Chunk } from '../react/ReactFlightClient'

export function FlightResponseChunkUnknown({ chunk }: { chunk: Chunk }) {
  return (
    <p>
      Encountered chunk type `{chunk.type}`. Rendering has not been implemented
      for this type yet.
    </p>
  )
}
