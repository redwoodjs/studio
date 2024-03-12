import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import FlightCell from 'src/components/FlightCell'
const FlightPage = ({ id }) => {
  return (
    <>
      <Metadata title="Flight" description="Flight page" />

      <Title className="pb-4">Flight Preview</Title>

      <FlightCell id={id} />
    </>
  )
}

export default FlightPage
