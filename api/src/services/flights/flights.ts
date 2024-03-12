import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const flights: QueryResolvers['flights'] = async () => {
  const result = await db.flight.findMany({ orderBy: { createdAt: 'desc' } })
  return result.map((flight) => {
    return {
      ...flight,
      payload: Buffer.from(flight.encodedPayload, 'base64').toString('utf-8'),
    }
  })
}

export const flight: QueryResolvers['flight'] = async ({ id }) => {
  const result = await db.flight.findUnique({
    where: { id },
  })

  return {
    ...result,
    payload: Buffer.from(result.encodedPayload, 'base64').toString('utf-8'),
  }
}
