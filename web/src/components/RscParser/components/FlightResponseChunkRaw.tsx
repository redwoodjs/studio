import { Chunk } from '../react/ReactFlightClient'

export function FlightResponseChunkRaw({ data }: { data: Chunk }) {
  const stringData =
    typeof data.originalValue === 'string'
      ? data.originalValue
      : JSON.stringify(data.originalValue, null, 2)

  return <pre className="max-h-80 overflow-auto text-xs">{stringData}</pre>
}
