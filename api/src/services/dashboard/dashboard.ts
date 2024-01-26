import {
  QueryResolvers,
  SpansByAttributeKeyAndType,
  PerformanceDataPoint,
  PerformanceFilterCriteria,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const PAGE_LIMIT = 30

const spansByAttributeKeyAndType = async (
  typeId: string,
  attributeKey?: string | null,
  attributeValue?: string | null,
  limit = PAGE_LIMIT
) =>
  await db.$queryRaw<SpansByAttributeKeyAndType[]>`
SELECT
  -- id must be unique per row or Apollo client will reuse data in cache
  s.id || '-' || a.hash as id,
  s.createdAt,
  s.updatedAt,
  s.statusCode,
  strftime('%Y-%m-%dT%H:%M:%fZ',s.startTimeNano / 1000000000.000,'unixepoch') AS startedAt,
  strftime('%Y-%m-%dT%H:%M:%fZ',s.endTimeNano / 1000000000.000, 'unixepoch') AS endedAt,
  cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
  cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec,
  t.id AS spanType,
  a.key AS attributeKey,
	CASE WHEN a.type = 'string' THEN
		substr(a.value, 2, length(a.value) - 2)
	ELSE
		cast(a.value as text)
	END AS attributeValue
FROM
  OTelTraceSpan s
  JOIN OTelTraceSpanType t ON t. "id" = s.typeId
  -- here we use the Prisma implicit join table to join attributes A to spans B
  JOIN _OTelTraceAttributeToOTelTraceSpan atos on atos.A = a.id and atos.B = s.id
  JOIN OTelTraceAttribute a ON atos.A = a.id
WHERE
  t.id = ${typeId}
  AND (${attributeKey} IS NULL OR a.key = ${attributeKey})
  AND (${attributeValue} IS NULL OR a.value = ${attributeValue})
ORDER BY
  s.createdAt DESC
LIMIT ${limit}`

type SpansByAttributeKeyAndTypeTotalCount = {
  totalCount: number
}

const spansByAttributeKeyAndTypeTotalCount = async (
  typeId: string,
  attributeKey?: string | null,
  attributeValue?: string | null
) =>
  await db.$queryRaw<SpansByAttributeKeyAndTypeTotalCount[]>`
SELECT
  count(*) as totalCount
FROM
  OTelTraceSpan s
  JOIN OTelTraceSpanType t ON t. "id" = s.typeId
  -- here we use the Prisma implicit join table to join attributes A to spans B
  JOIN _OTelTraceAttributeToOTelTraceSpan atos on atos.A = a.id and atos.B = s.id
  JOIN OTelTraceAttribute a ON atos.A = a.id
WHERE
  t.id = ${typeId}
  AND (${attributeKey} IS NULL OR a.key = ${attributeKey})
  AND (${attributeValue} IS NULL OR a.value = ${attributeValue})
ORDER BY
  s.createdAt DESC`

export const sqlStatementSpans: QueryResolvers['sqlStatementSpans'] =
  async () => {
    const typeId = 'SQL'
    const attributeKey = 'db.statement'

    const results = await spansByAttributeKeyAndType(typeId, attributeKey)
    const totalCountResults = await spansByAttributeKeyAndTypeTotalCount(
      typeId,
      attributeKey
    )

    return {
      results,
      totalCount: totalCountResults[0].totalCount,
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: '1',
        endCursor: '1',
      },
    }
  }

export const prismaModelSpans: QueryResolvers['sqlStatementSpans'] =
  async () => {
    const typeId = 'PRISMA'
    const attributeKey = 'model'

    const results = await spansByAttributeKeyAndType(typeId, attributeKey)
    const totalCountResults = await spansByAttributeKeyAndTypeTotalCount(
      typeId,
      attributeKey
    )

    return {
      results,
      totalCount: totalCountResults[0].totalCount,
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: '1',
        endCursor: '1',
      },
    }
  }

export const graphQLOperationSpans: QueryResolvers['graphQLOperationSpans'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'

    const results = await spansByAttributeKeyAndType(typeId, attributeKey)
    const totalCountResults = await spansByAttributeKeyAndTypeTotalCount(
      typeId,
      attributeKey
    )

    return {
      results,
      totalCount: totalCountResults[0].totalCount,
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: '1',
        endCursor: '1',
      },
    }
  }

export const anonymousGraphQLOperationSpans: QueryResolvers['anonymousGraphQLOperationSpans'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'
    const attributeValue = '"Anonymous Operation"' // has quotes in data

    const results = await spansByAttributeKeyAndType(
      typeId,
      attributeKey,
      attributeValue
    )

    const totalCountResults = await spansByAttributeKeyAndTypeTotalCount(
      typeId,
      attributeKey,
      attributeValue
    )

    return {
      results,
      totalCount: totalCountResults[0].totalCount,
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: '1',
        endCursor: '1',
      },
    }
  }

// TODO: I wanted to generalize this function, but SQLite and Prisma isn't happy with interpolating variables with the IN clause
export const databasePerformance: QueryResolvers['databasePerformance'] =
  async ({ filter }: { filter: PerformanceFilterCriteria }) => {
    const secondsAgo = filter?.secondsAgo ?? null

    return await db.$queryRaw<PerformanceDataPoint[]>`SELECT
    s.id,
    t.id AS spanType,
    t. "name" AS spanTypeName,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.startTimeNano / 1000000000.000,
      'unixepoch') AS startedAt,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.endTimeNano / 1000000000.000,
      'unixepoch') AS endedAt,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec
  FROM
    OTelTraceSpan s
    JOIN OTelTraceSpanType t ON t.id = s.typeId
  WHERE
    t.id IN('SQL', 'PRISMA')
  AND
    (${secondsAgo} IS NULL OR startTimeNano / 1000000000.000 >= strftime('%s', 'now') - ${secondsAgo})
  ORDER BY
    s.startTimeNano ASC,
    t.id`
  }

export const graphqlPerformance: QueryResolvers['graphqlPerformance'] = async ({
  filter,
}: {
  filter: PerformanceFilterCriteria
}) => {
  const secondsAgo = filter?.secondsAgo ?? null

  return await db.$queryRaw<PerformanceDataPoint[]>`SELECT
    s.id,
    t.id AS spanType,
    t. "name" AS spanTypeName,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.startTimeNano / 1000000000.000,
      'unixepoch') AS startedAt,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.endTimeNano / 1000000000.000,
      'unixepoch') AS endedAt,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec
  FROM
    OTelTraceSpan s
    JOIN OTelTraceSpanType t ON t.id = s.typeId
  WHERE
    t.id IN('GRAPHQL')
  AND
    (${secondsAgo} IS NULL OR startTimeNano / 1000000000.000 >= strftime('%s', 'now') - ${secondsAgo})
  ORDER BY
    s.startTimeNano ASC,
    t.id`
}

export const apiPerformance: QueryResolvers['apiPerformance'] = async ({
  filter,
}: {
  filter: PerformanceFilterCriteria
}) => {
  const secondsAgo = filter?.secondsAgo ?? null

  return await db.$queryRaw<PerformanceDataPoint[]>`SELECT
    s.id,
    t.id AS spanType,
    t. "name" AS spanTypeName,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.startTimeNano / 1000000000.000,
      'unixepoch') AS startedAt,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.endTimeNano / 1000000000.000,
      'unixepoch') AS endedAt,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec
  FROM
    OTelTraceSpan s
    JOIN OTelTraceSpanType t ON t.id = s.typeId
  WHERE
    t.id IN('REDWOOD_FUNCTION', 'REDWOOD_SERVICE')
  AND
    (${secondsAgo} IS NULL OR startTimeNano / 1000000000.000 >= strftime('%s', 'now') - ${secondsAgo})
  ORDER BY
    s.startTimeNano ASC,
    t.id`
}

export const miscPerformance: QueryResolvers['miscPerformance'] = async ({
  filter,
}: {
  filter: PerformanceFilterCriteria
}) => {
  const secondsAgo = filter?.secondsAgo ?? null

  return await db.$queryRaw<PerformanceDataPoint[]>`SELECT
    s.id,
    t.id AS spanType,
    t. "name" AS spanTypeName,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.startTimeNano / 1000000000.000,
      'unixepoch') AS startedAt,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.endTimeNano / 1000000000.000,
      'unixepoch') AS endedAt,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec
  FROM
    OTelTraceSpan s
    JOIN OTelTraceSpanType t ON t.id = s.typeId
  WHERE
    t.id IN('GENERIC')
  AND
    (${secondsAgo} IS NULL OR startTimeNano / 1000000000.000 >= strftime('%s', 'now') - ${secondsAgo})
  ORDER BY
    s.startTimeNano ASC,
    t.id`
}

export const networkPerformance: QueryResolvers['networkPerformance'] = async ({
  filter,
}: {
  filter: PerformanceFilterCriteria
}) => {
  const secondsAgo = filter?.secondsAgo ?? null

  return await db.$queryRaw<PerformanceDataPoint[]>`SELECT
    s.id,
    t.id AS spanType,
    t. "name" AS spanTypeName,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.startTimeNano / 1000000000.000,
      'unixepoch') AS startedAt,
    strftime ('%Y-%m-%dT%H:%M:%fZ',
      s.endTimeNano / 1000000000.000,
      'unixepoch') AS endedAt,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000.000) AS REAL) AS durationMs,
    cast(((s.endTimeNano - s.startTimeNano) / 1000000000.0000) AS REAL) AS durationSec
  FROM
    OTelTraceSpan s
    JOIN OTelTraceSpanType t ON t.id = s.typeId
  WHERE
    t.id IN('HTTP')
  AND
    (${secondsAgo} IS NULL OR startTimeNano / 1000000000.000 >= strftime('%s', 'now') - ${secondsAgo})
  ORDER BY
    s.startTimeNano ASC,
    t.id`
}
