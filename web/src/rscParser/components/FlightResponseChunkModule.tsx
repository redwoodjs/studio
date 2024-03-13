import { ModuleChunk } from '../react/ReactFlightClient'

function groupChunks(array: (string | number)[]) {
  const newArray = []
  for (let i = 0; i < array?.length; i += 2) {
    newArray.push({ name: array[i], path: array[i + 1] })
  }
  return newArray
}

export function FlightResponseChunkModule({
  data,
}: {
  data: ModuleChunk['value']
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">
        <p>Import {data[2] == '' ? 'unknown' : data[2]}</p>
        <p>Import {data?.['id'] === '' ? 'unknown' : data?.['id']}</p>
      </h3>
      <p>Id: {data[0]}</p>
      <p>Id: {data?.['id']}</p>
      <div>
        <h4 className="font-medium">Chunks</h4>
        <ul className="list-inside list-disc">
          {groupChunks(data[1]).map((item) => {
            return (
              <li key={item.name}>
                {item.name} - {item.path}
              </li>
            )
          })}
        </ul>
        <ul className="list-inside list-disc">
          {groupChunks(data?.['chunks'])?.map((item) => {
            return (
              <li key={item.name}>
                {item.name} - {item.path}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
