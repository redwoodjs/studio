import type { QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type { Flight } from '../../../db/client'

const decodeFlightPayload = (flight: Flight) => {
  if (flight.encoding === 'base64') {
    return Buffer.from(flight.encodedPayload, 'base64').toString('utf-8')
  }

  throw new ValidationError(`Unsupported encoding type ${flight.encoding}`)
}

const previewFlightPayload = (flight: Flight) => {
  const payload = decodeFlightPayload(flight)

  return payload.slice(0, 32)
}

export const flights: QueryResolvers['flights'] = async () => {
  const result = await db.flight.findMany({ orderBy: { createdAt: 'desc' } })
  return result.map((flight) => {
    return {
      ...flight,
      payload: decodeFlightPayload(flight),
      preview: previewFlightPayload(flight),
    }
  })
}

export const flight: QueryResolvers['flight'] = async ({ id }) => {
  const flight = await db.flight.findUnique({
    where: { id },
  })

  return {
    ...flight,
    payload: decodeFlightPayload(flight),
    preview: previewFlightPayload(flight),
  }
}
