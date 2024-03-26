import { Card } from '@tremor/react'
import type {
  FlightsPreviewQuery,
  FlightsPreviewQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { ErrorIcon, FlightIcon } from 'src/icons/Icons'

import { FlightsStatusCard } from './FlightsStatusCard'
import { FlightsTable } from './FlightsTable'

export const beforeQuery = (props: FlightsPreviewQueryVariables) => {
  return {
    variables: props,
    pollInterval: 5_000,
  }
}

export const QUERY: TypedDocumentNode<
  FlightsPreviewQuery,
  FlightsPreviewQueryVariables
> = gql`
  query FlightsPreviewQuery {
    flightsPreview {
      id
      status
      statuses
      startedAt
      endedAt
      hostname
      caption
      flights {
        id
        preview
        payload
        createdAt
        metadata
        performance {
          startedAt
          endedAt
          duration
          sizeInBytes
        }
      }
    }
  }
`

export const Loading = () => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="text-center">
        <FlightIcon
          className="mx-auto h-7 w-7 animate-bounce text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
          aria-hidden={true}
        />

        <p className="mt-2 animate-pulse text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Loading ...
        </p>
      </div>
    </Card>
  </div>
)

export const Empty = () => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="flex h-44 items-center justify-center rounded-tremor-small border border-dashed border-tremor-border p-4 dark:border-dark-tremor-border">
        <div className="text-center">
          <FlightIcon
            className="mx-auto h-7 w-7 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
            aria-hidden={true}
          />
          <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            No data to show
          </p>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Start sending data by using your RSC application
          </p>
        </div>
      </div>
    </Card>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="flex h-screen items-center justify-center">
    <Card className="sm:mx-auto sm:max-w-lg">
      <div className="text-center">
        <ErrorIcon
          className="mx-auto h-7 w-7 animate-pulse text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
          aria-hidden={true}
        />

        <p className="mt-2 animate-pulse text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {error?.message}
        </p>
      </div>
    </Card>
  </div>
)

export const Success = ({
  flightsPreview,
}: CellSuccessProps<FlightsPreviewQuery>) => {
  return (
    <>
      <FlightsStatusCard flightsPreview={flightsPreview} />
      <FlightsTable flightsPreview={flightsPreview} />
    </>
  )
}
