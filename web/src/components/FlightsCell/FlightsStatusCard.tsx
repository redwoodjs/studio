import { Card, Flex, Icon } from '@tremor/react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { Flight } from 'types/graphql'

import { routes } from '@redwoodjs/router'

import Tracker from 'src/components/FlightsCell/FlightTracker'
import { FlightIcon, FlightHostIcon } from 'src/icons/Icons'

const STATUS_COLOR_MAPPINF = {
  OK: 'emerald-500',
  ERROR: 'red-500',
  WARN: 'gray-300',
}

export const FlightsStatusCard = ({ flightsPreview }) => {
  const { status, statuses, startedAt, endedAt, hostname, caption, flights } =
    flightsPreview

  const data = flights.map((flight: Flight) => {
    const status = flight.metadata?.['status'] || 'OK'
    const when = formatDistanceToNow(parseISO(flight.performance.startedAt), {
      includeSeconds: true,
      addSuffix: true,
    })
    const tooltip = [flight.preview, when, status].join(' - ')

    return {
      status,
      tooltip,
      to: routes.flight({ id: flight.id }),
    }
  })

  const combinedData = data.map((item) => {
    return {
      ...item,
      color: STATUS_COLOR_MAPPINF[item.status],
    }
  })
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Flex alignItems="center" justifyContent="start" className="space-x-2">
          <Icon icon={FlightIcon} variant="solid" tooltip={caption} />

          <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Flight Status
          </h3>
        </Flex>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-tremor-full px-3 py-1 text-tremor-default text-tremor-content-emphasis ring-1 ring-inset ring-tremor-ring dark:text-dark-tremor-content-emphasis dark:ring-dark-tremor-ring">
          <span
            className="-ml-0.5 h-2 w-2 rounded-tremor-full bg-emerald-500"
            aria-hidden={true}
          />
          {status}
        </span>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <FlightHostIcon
            className="h-5 w-5 shrink-0 text-emerald-500"
            aria-hidden={true}
          />
          <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {hostname}
          </p>
        </div>
        <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {caption}
        </p>
      </div>
      <Tracker data={combinedData} className="mt-4 w-full lg:flex" />
      <div className="mt-3 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span>
          {formatDistanceToNow(parseISO(startedAt), {
            includeSeconds: true,
            addSuffix: true,
          })}
        </span>
        <span>
          {formatDistanceToNow(parseISO(endedAt), {
            includeSeconds: true,
            addSuffix: true,
          })}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {statuses.map((status) => {
          return (
            <span
              key={status}
              className="inline-flex items-center gap-x-2 rounded-tremor-small bg-tremor-background-subtle px-2 py-0.5 text-tremor-default text-tremor-content dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis"
            >
              <span className="h-2 w-2 rounded-tremor-full bg-emerald-500" />
              {status}
            </span>
          )
        })}
      </div>
    </Card>
  )
}
