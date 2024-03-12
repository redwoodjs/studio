import { Metadata } from '@redwoodjs/web'

import FlightsCell from 'src/components/FlightsCell'

const FlightsPage = () => {
  return (
    <>
      <Metadata title="Flights" description="Flights" />

      <h1>Flights</h1>
      <FlightsCell />
    </>
  )
}

export default FlightsPage
