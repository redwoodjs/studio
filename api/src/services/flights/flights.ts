import type { QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type { Flight } from '../../../db/client'

const decodeFlightMetadata = (flight: Flight) => {
  if (flight.encoding === 'base64') {
    const metadata = JSON.parse(
      Buffer.from(flight.encodedMetadata, 'base64').toString('utf-8')
    )

    console.log(metadata)
    return metadata
  }

  throw new ValidationError(`Unsupported encoding type ${flight.encoding}`)
}

const decodeFlightPayload = (flight: Flight) => {
  if (flight.encoding === 'base64') {
    return Buffer.from(flight.encodedPayload, 'base64').toString('utf-8')
  }

  throw new ValidationError(`Unsupported encoding type ${flight.encoding}`)
}

const decodeFlightPerformance = (flight: Flight) => {
  const payload = decodeFlightPayload(flight)
  const metadata = decodeFlightMetadata(flight)
  const performance = {
    startedAt: new Date(metadata?.['performance'].startedAt).toISOString(),
    endedAt: new Date(metadata?.['performance'].endedAt).toISOString(),
    duration: metadata?.['performance'].duration || 0,
    sizeInBytes: Buffer.from(payload).length,
  }

  return performance
}

const previewFlightPayload = (flight: Flight) => {
  const metadata = decodeFlightMetadata(flight)
  const url = metadata?.['request']?.['url']
  const id = metadata?.['rsc']?.['rscId'] || metadata?.['rsc']?.['rsfId']
  const duration = metadata?.['performance']?.['duration'] || 0
  return `${id}#${url}-${duration}ms`
}

export const flights: QueryResolvers['flights'] = async () => {
  const result = await db.flight.findMany({ orderBy: { createdAt: 'desc' } })
  return result.map((flight) => {
    return {
      ...flight,
      payload: decodeFlightPayload(flight),
      preview: previewFlightPayload(flight),
      metadata: decodeFlightMetadata(flight),
      performance: decodeFlightPerformance(flight),
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
    metadata: decodeFlightMetadata(flight),
    performance: decodeFlightPerformance(flight),
  }
}
