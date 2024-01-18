import { QueryResolvers, SpansByAttributeKeyAndType } from 'types/graphql'

import { db } from 'src/lib/db'
// import { logger } from 'src/lib/logger'

const spansByAttributeKeyAndType = async (
  typeId,
  attributeKey,
  attributeValue = null
) =>
  await db.$queryRaw`
SELECT
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
  JOIN OTelTraceAttribute a ON a.hash
WHERE
  t.id = ${typeId}
  AND
  a.key = ${attributeKey}
  AND (${attributeValue} IS NULL OR a.value = ${attributeValue})
ORDER BY
  s.createdAt DESC`

export const metricSqlStatements: QueryResolvers['metricSqlStatements'] =
  async () => {
    const typeId = 'SQL'
    const attributeKey = 'db.statement'

    return (await spansByAttributeKeyAndType(
      typeId,
      attributeKey
    )) as SpansByAttributeKeyAndType[]
  }

export const metricPrismaModels: QueryResolvers['metricSqlStatements'] =
  async () => {
    const typeId = 'PRISMA'
    const attributeKey = 'model'

    return (await spansByAttributeKeyAndType(
      typeId,
      attributeKey
    )) as SpansByAttributeKeyAndType[]
  }

export const metricGraphQLOperations: QueryResolvers['metricGraphQLOperations'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'

    return (await spansByAttributeKeyAndType(
      typeId,
      attributeKey
    )) as SpansByAttributeKeyAndType[]
  }

export const metricAnonymousGraphQLOperations: QueryResolvers['metricAnonymousGraphQLOperations'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'
    const attributeValue = '"Anonymous Operation"' // has quotes in data

    return (await spansByAttributeKeyAndType(
      typeId,
      attributeKey,
      attributeValue
    )) as SpansByAttributeKeyAndType[]
  }
