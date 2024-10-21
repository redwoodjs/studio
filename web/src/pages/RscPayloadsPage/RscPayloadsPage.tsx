import { Title } from '@tremor/react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import FlightsCell from 'src/components/FlightsCell'

const RscPayloadsPage = () => {
  return (
    <>
      <Metadata
        title="RSC Payloads"
        description="Track RSC Payload status and view details."
      />
      <div className="mb-4 flex items-center space-x-2">
        <Link
          to={routes.flights()}
          className="text-tremor-link hover:text-tremor-brand"
        >
          <Title>RSC Payloads</Title>
        </Link>
      </div>

      <FlightsCell />
    </>
  )
}

export default RscPayloadsPage
