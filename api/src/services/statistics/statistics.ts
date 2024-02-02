import {
  QueryResolvers,
  SpanStatistics,
  SpanAttributeStatistics,
} from 'types/graphql'

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
      count (intervalStartedAt) AS statisticCount,
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
    statisticCount,
    intervalStartedAt,
    ROUND(minDuration, 3) AS minDuration,
    ROUND(maxDuration, 3) AS maxDuration,
    ROUND(avgDuration, 3) AS avgDuration,
    ROUND(CAST((minDuration / 1000000.000) AS REAL), 3) AS minDurationMs,
    ROUND(CAST((minDuration / 1000000000.000) AS REAL), 3) AS minDurationSec,
    ROUND(CAST((maxDuration / 1000000.000) AS REAL), 3) AS maxDurationMs,
    ROUND(CAST((maxDuration / 1000000000.000) AS REAL), 3) AS maxDurationSec,
    ROUND(CAST((avgDuration / 1000000.000) AS REAL), 3) AS avgDurationMs,
    ROUND(CAST((avgDuration / 1000000000.000) AS REAL), 3) AS avgDurationSec
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

export const spanAttributeStatistics: QueryResolvers['spanAttributeStatistics'] =
  async ({
    typeId,
    attributeKey,
    attributeValue,
  }: {
    typeId: string
    attributeKey: string
    attributeValue?: string
  }) => {
    return db.$queryRaw<SpanAttributeStatistics[]>`WITH t1 AS (
	SELECT
		CASE WHEN a.type = 'string' THEN
			substr((substr(a.value,
					1,
					instr(a.value,
						' /* traceparent=') - 1) || substr(a.value,
					instr(a.value,
						'*/') + 1)),
			2,
			length((substr(a.value,
					1,
					instr(a.value,
						' /* traceparent=') - 1) || substr(a.value,
					instr(a.value,
						'*/') + 1))) - 2)
		ELSE
			cast(a.value AS text)
		END AS attributeValue,
		CAST((s.endTimeNano - s.startTimeNano) AS NUMERIC) AS duration
	FROM
		OTelTraceSpan s
		JOIN OTelTraceSpanType t ON t. "id" = s.typeId
		-- here we use the Prisma implicit join table to join attributes A to spans B
		JOIN _OTelTraceAttributeToOTelTraceSpan atos ON atos.A = a.id
			AND atos.B = s.id
		JOIN OTelTraceAttribute a ON atos.A = a.id
  WHERE
    t.id = ${typeId}
    AND (${attributeKey} IS NULL OR a.key = ${attributeKey})
    AND (${attributeValue} IS NULL OR a.value = ${attributeValue})
),
t2 AS (
	SELECT
		count(attributeValue) AS statisticCount,
		attributeValue,
		MIN(duration) AS minDuration,
		MAX(duration) AS maxDuration,
		AVG(duration) AS avgDuration
	FROM
		t1
	GROUP BY
		attributeValue
)
SELECT
  statisticCount,
	attributeValue,
	ROUND(minDuration, 3) AS minDuration,
	ROUND(maxDuration, 3) AS maxDuration,
  ROUND(avgDuration, 3) AS avgDuration,
  ROUND(CAST((minDuration / 1000000.000) AS REAL), 3) AS minDurationMs,
	ROUND(CAST((minDuration / 1000000000.000) AS REAL), 3) AS minDurationSec,
	ROUND(CAST((maxDuration / 1000000.000) AS REAL), 3) AS maxDurationMs,
	ROUND(CAST((maxDuration / 1000000000.000) AS REAL), 3) AS maxDurationSec,
	ROUND(CAST((avgDuration / 1000000.000) AS REAL), 3) AS avgDurationMs,
	ROUND(CAST((avgDuration / 1000000000.000) AS REAL), 3) AS avgDurationSec
FROM
	t2
	order by 2, 1;`
  }

export const sqlStatementAttributeStatistics: QueryResolvers['sqlStatementAttributeStatistics'] =
  async () => {
    const typeId = 'SQL'
    const attributeKey = 'db.statement'

    return await spanAttributeStatistics({ typeId, attributeKey })
  }

export const graphQLOperationAttributeStatistics: QueryResolvers['graphQLOperationAttributeStatistics'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'

    return await spanAttributeStatistics({ typeId, attributeKey })
  }

export const anonymousGraphQLOperationAttributeStatistics: QueryResolvers['anonymousGraphQLOperationAttributeStatistics'] =
  async () => {
    const typeId = 'GRAPHQL'
    const attributeKey = 'graphql.execute.operationName'
    const attributeValue = '"Anonymous Operation"' // has quotes in data

    return await spanAttributeStatistics({
      typeId,
      attributeKey,
      attributeValue,
    })
  }
