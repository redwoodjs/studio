import {
  QueryResolvers,
  SpansByAttributeKeyAndType,
  PerformanceDataPoint,
  PerformanceFilterCriteria,
} from 'types/graphql'

import { db } from 'src/lib/db'

const spansByAttributeKeyAndType = async (
  typeId: string,
  attributeKey?: string | null,
  attributeValue?: string | null
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
LIMIT 200`
// ^^ until we paginate

export const sqlStatementSpans: QueryResolvers['sqlStatementSpans'] =
  async () => {
    const typeId = 'SQL'
    const attributeKey = 'db.statement'

    return await spansByAttributeKeyAndType(typeId, attributeKey)
  }

export const prismaModelSpans: QueryResolvers['sqlStatementSpans'] =
  async () => {
    const typeId = 'PRISMA'
    const attributeKey = 'model'

    return await spansByAttributeKeyAndType(typeId, attributeKey)
  }

export const graphQLOperationSpans: QueryResolvers['graphQLOperationSpans'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'

    return await spansByAttributeKeyAndType(typeId, attributeKey)
  }

export const anonymousGraphQLOperationSpans: QueryResolvers['anonymousGraphQLOperationSpans'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'
    const attributeValue = '"Anonymous Operation"' // has quotes in data

    return await spansByAttributeKeyAndType(
      typeId,
      attributeKey,
      attributeValue
    )
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
