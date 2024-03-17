import { Card, Flex, Icon } from '@tremor/react'
import type { FlightPreview } from 'types/graphql'

import { FlightPayloadIcon } from 'src/icons/Icons'

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

const PerformanceDetails = ({ preview }) => {
  const performance = preview.flight.performance

  return (
    <>
      <h4 className="font-small mt-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Flight render duration: {performance?.duration.toFixed(3) || 0} ms
      </h4>
      <h4 className="font-small mt-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Flight requested at: {performance?.startedAt}
      </h4>
      <h4 className="font-small mt-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Flight payload size:{' '}
        {((performance?.sizeInBytes || 0) / 1_024.0).toFixed(3)} kb
      </h4>
    </>
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
