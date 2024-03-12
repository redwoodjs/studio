import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import FlightsCell from 'src/components/FlightsCell'

const FlightsPage = () => {
  return (
    <>
      <Metadata title="Flights" description="Flights" />

      <Title className="pb-4">Flights</Title>

      <FlightsCell />
    </>
  )
}

export default FlightsPage
