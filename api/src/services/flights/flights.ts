import { logger } from '@prisma/internals'
import type { QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type { Flight } from '../../../db/client'

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
  const performance = decodeFlightPerformance(flight)
  const url = metadata?.['request']?.['url']
  const id = metadata?.['rsc']?.['rscId'] || metadata?.['rsc']?.['rsfId']

  return `${id}#${url} at ${performance.startedAt} for (${performance.duration}ms)`
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
