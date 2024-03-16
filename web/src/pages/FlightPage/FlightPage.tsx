import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import FlightCell from 'src/components/FlightCell'
const FlightPage = ({ id }) => {
  return (
    <>
      <Metadata title="Flight" description="Flight page" />
      <Title>Flight Preview</Title>
      <div className="pt-4">
        <FlightCell id={id} />
      </div>
    </>
  )
}

export default FlightPage
