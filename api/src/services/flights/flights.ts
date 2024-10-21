import { logger } from '@prisma/internals'
import type { QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type { Flight } from '../../../db/client'

const LAST_FLIGHTS_PREVIEW_COUNT = 60

const decodeFlightMetadata = (flight: Flight) => {
  if (flight.encoding === 'base64') {
    try {
      const metadata = JSON.parse(
        Buffer.from(flight.encodedMetadata, 'base64').toString('utf-8')
      )

      return metadata
    } catch (e) {
      logger.error(e)
      throw new ValidationError(`Invalid metadata for flight ${flight.id}`)
    }
  }

  throw new ValidationError(`Unsupported encoding type ${flight.encoding}`)
}

const decodeFlightPayload = (flight: Flight) => {
  if (flight.encoding === 'base64') {
    try {
      return Buffer.from(flight.encodedPayload, 'base64').toString('utf-8')
    } catch (e) {
      logger.error(e)
      throw new ValidationError(`Invalid payload for flight ${flight.id}`)
    }
  }

  throw new ValidationError(`Unsupported encoding type ${flight.encoding}`)
}

const decodeFlightPerformance = (flight: Flight) => {
  try {
    const payload = decodeFlightPayload(flight)
    const metadata = decodeFlightMetadata(flight)
    const performanceMeta = metadata?.['performance'] || {}
    const performance = {
      startedAt: new Date(performanceMeta.startedAt).toISOString(),
      endedAt: new Date(performanceMeta.endedAt).toISOString(),
      duration: performanceMeta.duration || 0,
      sizeInBytes: Buffer.from(payload).length,
    }

    return performance
  } catch (e) {
    logger.error(e)
    return {
      startedAt: new Date().toISOString(),
      endedAt: new Date().toISOString(),
      duration: 0,
      sizeInBytes: 0,
    }
  }
}

const previewFlightPayload = (flight: Flight) => {
  const metadata = decodeFlightMetadata(flight)
  const id = metadata?.rsc?.rscId || metadata?.rsc?.rsaId || flight.id

  return id
}

const enrichFlight = (flight: Flight) => {
  return {
    ...flight,
    payload: decodeFlightPayload(flight),
    preview: previewFlightPayload(flight),
    metadata: decodeFlightMetadata(flight),
    performance: decodeFlightPerformance(flight),
  }
}

export const flights: QueryResolvers['flights'] = async () => {
  const result = await db.flight.findMany({ orderBy: { createdAt: 'asc' } })
  return result.map((flight) => {
    return enrichFlight(flight)
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

export const flightPreview = async ({ id }) => {
  const result = await db.flight.findUnique({
    where: { id },
  })

  const enriched = enrichFlight(result)

  let status = 'OK'

  switch (enriched.metadata?.status) {
    case 200:
      status = 'OK'
      break
    case 500:
      status = 'ERROR'
      break
    default:
      status = 'WARNING'
  }

  return {
    id: result.id,
    flight: enriched,
    status,
    startedAt: enriched.performance?.startedAt || new Date().toISOString(),
    endedAt: enriched.performance?.endedAt || new Date().toISOString(),
    hostname: enriched.metadata?.['hostname'] || 'localhost',
    caption: 'RSC Payload',
  }
}

export const flightsPreview = async () => {
  const result = await db.flight.findMany({
    orderBy: { createdAt: 'asc' },
    take: LAST_FLIGHTS_PREVIEW_COUNT,
  })

  if (!result || result.length === 0) {
    return null
  }

  const enriched = result.map((flight) => {
    return enrichFlight(flight)
  })

  const firstPerformance = enriched[0]?.performance
  const lastPerformance = enriched[enriched?.length - 1]?.performance
  const firstMetadata = enriched[0]?.metadata
  const lastMetadata = enriched[enriched?.length - 1]?.metadata

  const overallStatus = lastMetadata?.['status'] || 200

  let status = 'OK'

  switch (overallStatus) {
    case 200:
      status = 'OK'
      break
    case 500:
      status = 'ERROR'
      break
    default:
      status = 'WARNING'
  }

  const statuses = new Set()

  enriched.forEach((flight) => {
    const metadata = flight.metadata
    const theStatus = metadata?.['status'] || 200
    switch (theStatus) {
      case 200:
        statuses.add('OK')
        break
      case 500:
        statuses.add('ERROR')
        break
      default:
        statuses.add('WARNING')
    }
  })

  const uniqueStatuses = Array.from(statuses).sort((a, b) => (a > b ? 1 : -1))

  const caption = `Flights (${
    enriched.length >= LAST_FLIGHTS_PREVIEW_COUNT
      ? `last ${LAST_FLIGHTS_PREVIEW_COUNT}`
      : enriched.length
  })`

  return {
    id: 'flights-preview',
    flights: enriched,
    status,
    statuses: uniqueStatuses,
    startedAt: firstPerformance?.startedAt || new Date().toISOString(),
    endedAt: lastPerformance?.endedAt || new Date().toISOString(),
    hostname: firstMetadata?.['hostname'] || 'localhost',
    caption,
  }
}
