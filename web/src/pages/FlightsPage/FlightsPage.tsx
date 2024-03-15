import { Metadata } from '@redwoodjs/web'

import FlightsCell from 'src/components/FlightsCell'

const FlightsPage = () => {
  return (
    <>
      <Metadata title="Flights" description="Flights" />
      <FlightsCell />
    </>
  )
}

export default FlightsPage
