import { Card } from '@tremor/react'
import type {
  FlightPreview,
  FindFlightPreviewQuery,
  FindFlightPreviewQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { ErrorIcon, FlightIcon } from 'src/icons/Icons'

import { FlightPreviewViewer } from './FlightPreviewViewer'

export const QUERY: TypedDocumentNode<
  FindFlightPreviewQuery,
  FindFlightPreviewQueryVariables
> = gql`
  query FindFlightPreviewQuery($id: String!) {
    preview: flightPreview(id: $id) {
      id
      status
      startedAt
      endedAt
      hostname
      caption
      flight {
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
  preview,
}: CellSuccessProps<
  FindFlightPreviewQuery,
  FindFlightPreviewQueryVariables
>) => {
  return (
    <div>
      <FlightPreviewViewer preview={preview as FlightPreview} />
    </div>
  )
}
