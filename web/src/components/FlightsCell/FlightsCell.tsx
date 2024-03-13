import type { FlightsQuery, FlightsQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { ViewerStreams } from 'src/rscParser/main'
import type { RscChunkMessage } from 'src/rscParser/types'
export const QUERY: TypedDocumentNode<
  FlightsQuery,
  FlightsQueryVariables
> = gql`
  query FlightsQuery {
    flights {
      id
      preview
      payload
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ flights }: CellSuccessProps<FlightsQuery>) => {
  const fetchStartTime = 0
  let chunkStartTime = 0
  let chunkEndTime = 20
  const messages = flights.map((flight) => {
    const payload = flight.payload
    return {
      type: 'RSC_CHUNK',
      tabId: 0,
      data: {
        fetchUrl: 'https://example.com',
        fetchHeaders: {
          'Content-Type': 'application/json',
        },
        fetchStartTime,
        chunkStartTime,
        chunkEndTime,
        chunkValue: Array.from(new TextEncoder().encode(payload)),
      },
    } satisfies RscChunkMessage

    const chunkTime = 10
    chunkStartTime = chunkEndTime + chunkTime
    chunkEndTime = chunkStartTime + chunkTime
  })

  return (
    <>
      <ViewerStreams messages={messages} />
      <ul>
        {flights.map((flight) => {
          return (
            <li key={flight.id}>
              <Link to={routes.flight({ id: flight.id })}>
                {flight.id} - {flight.preview} at {flight.createdAt}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
