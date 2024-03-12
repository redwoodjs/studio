import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Title } from '@tremor/react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import FlightCell from 'src/components/FlightCell'

const FlightPage = ({ id }) => {
  return (
    <>
      <Metadata
        title="Flight Preview"
        description="Preview the RSC Payload and chunk breakdown."
      />
      <div className="flex items-center space-x-2">
        <Link
          to={routes.flights()}
          className="text-tremor-link hover:text-tremor-brand"
        >
          <Title>Flight Previews</Title>
        </Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Title>Overview</Title>
      </div>

      <div className="pt-4">
        <FlightCell id={id} />
      </div>
    </>
  )
}

export default FlightPage
