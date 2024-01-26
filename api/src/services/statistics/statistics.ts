import { QueryResolvers, SpanStatistics } from 'types/graphql'

import { db } from 'src/lib/db'

export const spanStatistics: QueryResolvers['spanStatistics'] = async ({
  typeId,
  attributeKey,
  attributeValue,
  intervalMins = 5,
}: {
  typeId: string
  attributeKey: string
  attributeValue?: string
  intervalMins?: number
}) => {
  return db.$queryRaw<SpanStatistics[]>`
  WITH t1 AS (
    SELECT
      strftime ('%Y-%m-%dT%H:%M:%SZ',
        ROUND(strftime ('%s',
            datetime (s.startTimeNano / 1000000000.000,
              'unixepoch')) / (${intervalMins} * 60)) * (${intervalMins} * 60),
        'unixepoch') AS intervalStartedAt,
      CAST((s.endTimeNano - s.startTimeNano) AS NUMERIC) AS duration
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
  ),
  t2 AS (
    SELECT
      intervalStartedAt,
      MIN(duration) AS minDuration,
      MAX(duration) AS maxDuration,
      AVG(duration) AS avgDuration
    FROM
      t1
    GROUP BY
      intervalStartedAt
  )
  SELECT
    intervalStartedAt,
    minDuration,
    maxDuration,
    avgDuration,
    CAST((minDuration / 1000000.000) AS REAL) AS minDurationMs,
    CAST((minDuration / 1000000000.000) AS REAL) AS minDurationSec,
    CAST((maxDuration / 1000000.000) AS REAL) AS maxDurationMs,
    CAST((maxDuration / 1000000000.000) AS REAL) AS maxDurationSec,
    CAST((avgDuration / 1000000.000) AS REAL) AS avgDurationMs,
    CAST((avgDuration / 1000000000.000) AS REAL) AS avgDurationSec
  FROM
    t2
  ORDER BY intervalStartedAt DESC`
}

export const sqlStatementStatistics: QueryResolvers['sqlStatementStatistics'] =
  async ({ intervalMins }) => {
    const typeId = 'SQL'
    const attributeKey = 'db.statement'

    return await spanStatistics({ typeId, attributeKey, intervalMins })
  }

export const graphQLOperationStatistics: QueryResolvers['graphQLOperationStatistics'] =
  async ({ intervalMins }) => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'

    return await spanStatistics({ typeId, attributeKey, intervalMins })
  }

export const anonymousGraphQLOperationStatistics: QueryResolvers['anonymousGraphQLOperationStatistics'] =
  async ({ intervalMins }) => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'
    const attributeValue = '"Anonymous Operation"' // has quotes in data

    return await spanStatistics({
      typeId,
      attributeKey,
      attributeValue,
      intervalMins,
    })
  }
