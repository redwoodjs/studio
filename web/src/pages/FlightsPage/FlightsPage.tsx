import { Title } from '@tremor/react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import FlightsCell from 'src/components/FlightsCell'

const FlightsPage = () => {
  return (
    <>
      <Metadata
        title="Flight Previews"
        description="Track RSC Flight Payload status and view details."
      />
      <div className="mb-4 flex items-center space-x-2">
        <Link
          to={routes.flights()}
          className="text-tremor-link hover:text-tremor-brand"
        >
          <Title>Flight Previews</Title>
        </Link>
      </div>

      <FlightsCell />
    </>
  )
}

export default FlightsPage
