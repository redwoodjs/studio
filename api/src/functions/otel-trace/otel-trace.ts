import type { APIGatewayEvent, Context } from 'aws-lambda'
import { and, eq } from 'drizzle-orm'

import { db } from 'src/lib/drizzle/db'
import {
  OtelTraceAttribute,
  otelTraceAttributeTable,
} from 'src/lib/drizzle/schema'
import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  // Some guidance is available from:
  // https://github.com/open-telemetry/opentelemetry-proto/blob/main/docs/specification.md
  // Note the spec for OTLP traces is here:
  // https://github.com/open-telemetry/opentelemetry-proto/blob/main/opentelemetry/proto/trace/v1/trace.proto
  // TODO: Consider adding typing based on the proto spec

  const data = JSON.parse(event.body ?? '{}')

  const resourceSpans = data.resourceSpans ?? []
  for (let i = 0; i < resourceSpans.length; i++) {
    const resourceAttributes = resourceSpans[i].resource.attributes

    const resourceAttributeIds: string[] = []
    for (let j = 0; j < resourceAttributes.length; j++) {
      const attribute = resourceAttributes[j]
      const attributeValueType = Object.keys(attribute.value)[0]

      let attributeId = db
        .select({
          id: otelTraceAttributeTable.id,
        })
        .from(otelTraceAttributeTable)
        .where(
          and(
            eq(otelTraceAttributeTable.key, attribute.key),
            // @ts-expect-error TODO: Fix the typing to match the DB enum for the attributeValueType
            eq(otelTraceAttributeTable.type, attributeValueType),
            eq(
              otelTraceAttributeTable.value,
              attribute.value[attributeValueType]
            )
          )
        )
        .get()?.id
      if (attributeId === undefined) {
        // @ts-expect-error TODO: Fix the typing to match the DB enum for the attributeValueType
        attributeId = db
          .insert(otelTraceAttributeTable)
          .values({
            key: attribute.key,
            type: attributeValueType,
            value: attribute.value[attributeValueType],
          })
          .returning({
            id: otelTraceAttributeTable.id,
          })
          .get().id
      }
      resourceAttributeIds.push(attributeId)
    }

    const scopeSpans = resourceSpans[i].scopeSpans
  }

  // TODO: Currently we always responde with a "full success" but we should respond dynamically based on how we got on
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }
}
