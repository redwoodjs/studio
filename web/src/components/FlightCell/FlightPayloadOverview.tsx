import { Card, Flex, Icon } from '@tremor/react'
import { parseISO, formatISO9075 } from 'date-fns'
import type { FlightPreview } from 'types/graphql'

import { FlightPayloadIcon, InfoIcon } from 'src/icons/Icons'

const Heading = ({ preview }) => {
  const metadata = preview.flight.metadata

  const caption = `${
    metadata?.rsc?.rscId || metadata?.rsc?.rsfId || 'Unknown'
  } Flight Payload`

  return (
    <Flex alignItems="center" justifyContent="start" className="mb-4 space-x-2">
      <Icon icon={FlightPayloadIcon} variant="solid" tooltip={caption} />
      <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {caption}
      </h3>
    </Flex>
  )
}

const Payload = ({ preview }) => {
  const payload = preview.flight.payload

  return (
    <div>
      <div
        className="border-1 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {payload}
      </div>
    </div>
  )
}

const Duration = ({ performance }) => {
  return <>{performance?.duration.toFixed(3) || 0} ms</>
}

const RequestedAt = ({ performance }) => {
  return (
    <>
      {formatISO9075(parseISO(performance?.startedAt), {
        format: 'extended',
        representation: 'complete',
      })}
    </>
  )
}

const Size = ({ performance }) => {
  return <>{performance?.sizeInBytes || 0} bytes</>
}

const PerformanceDetails = ({ preview }) => {
  const performance = preview.flight.performance

  return (
    <div className="border-1 mt-4 rounded-md bg-tremor-background-muted p-4 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-subtle dark:ring-dark-tremor-ring">
      <h4 className="font-small mt-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        <span className="font-semibold">Render duration:</span>
        <span className="pl-2">
          <Duration performance={performance} />
        </span>
      </h4>
      <h4 className="font-small mt-2 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        <span className="font-semibold">Requested at:</span>
        <span className="pl-2">
          <RequestedAt performance={performance} />
        </span>
      </h4>
      <h4 className="font-small text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        <div className="flex items-center justify-start space-x-1">
          <span className="font-semibold">Payload size:</span>
          <span className="pl-1">
            <Size performance={performance} />
          </span>
          <Icon
            icon={InfoIcon}
            size="sm"
            variant="simple"
            tooltip="Note: Size of the flight payload includes extra bytes for ids and other formatting characters per chunk."
          />
        </div>
      </h4>
    </div>
  )
}

type Props = {
  preview: FlightPreview
}

export const FlightPayloadOverview = ({ preview }: Props) => {
  return (
    <Card>
      <Heading preview={preview} />
      <Payload preview={preview} />
      <PerformanceDetails preview={preview} />
    </Card>
  )
}
