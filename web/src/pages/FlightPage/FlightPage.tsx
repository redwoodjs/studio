import { Metadata } from '@redwoodjs/web'

import FlightCell from 'src/components/FlightCell'
const FlightPage = ({ id }) => {
  return (
    <>
      <Metadata title="Flight" description="Flight page" />

      <h1>Flight Page</h1>
      <FlightCell id={id} />
    </>
  )
}

export default FlightPage
