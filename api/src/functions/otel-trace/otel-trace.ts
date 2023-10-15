import crypto from 'node:crypto'

import type { APIGatewayEvent, Context } from 'aws-lambda'
import { eq } from 'drizzle-orm'

import { db } from 'src/lib/drizzle/db'
import {
  otelTraceAttributeTable,
  otelTraceResourceAttributeTable,
  otelTraceResourceTable,
  otelTraceSpanAttributeTable,
  otelTraceSpanEventAttributeTable,
  otelTraceSpanEventTable,
  otelTraceSpanScopeTable,
  otelTraceSpanTable,
} from 'src/lib/drizzle/schema'

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
    const resourceId = getResourceId(resourceSpans[i].resource.attributes)
    for (let j = 0; j < resourceSpans[i].scopeSpans.length; j++) {
      const scopeId = getSpanScopeId(resourceSpans[i].scopeSpans[j].scope)
      const spans = resourceSpans[i].scopeSpans[j].spans
      for (let k = 0; k < spans.length; k++) {
        insertSpan(resourceId, scopeId, spans[k])
      }
    }
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

function hashObject(obj: unknown): string {
  return crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex')
}

// TODO: Type the attribute parameter
function getAttributeId(attribute: any): string {
  const key = attribute.key
  const value = Object.values(attribute.value)[0]
  const type = Object.keys(attribute)[0]
  const hash = hashObject(attribute)

  const existingAttributeId = db
    .select({
      id: otelTraceAttributeTable.id,
    })
    .from(otelTraceAttributeTable)
    .where(eq(otelTraceAttributeTable.hash, hash))
    .get()?.id
  if (existingAttributeId) {
    return existingAttributeId
  }

  // @ts-expect-error - TODO: Have to type this to match the DB enum
  const newAttributeId = db
    .insert(otelTraceAttributeTable)
    .values({
      key,
      value,
      type,
      hash,
    })
    .returning({
      id: otelTraceAttributeTable.id,
    })
    .get().id
  if (newAttributeId) {
    return newAttributeId
  } else {
    throw new Error(
      'Encountered an error while creating a new attribute for OTel trace ingestion'
    )
  }
}

// TODO: Type the resourceAttributes parameter
function getResourceId(resourceAttributes: any[]): string {
  // Compute the hash of the attributes for quick lookup of an existing resource
  const resourceAttributeHash = hashObject(resourceAttributes)

  // Find an existing based on the hash
  const existingResourceId = db
    .select({
      id: otelTraceResourceTable.id,
    })
    .from(otelTraceResourceTable)
    .where(eq(otelTraceResourceTable.attriubuteHash, resourceAttributeHash))
    .get()?.id
  if (existingResourceId) {
    return existingResourceId
  }

  // Create a new resource by finding the reference to all the attributes and creating a new resource
  const attributeIds: string[] = []
  for (const attribute of resourceAttributes) {
    attributeIds.push(getAttributeId(attribute))
  }

  // Insert the new resource
  const newResourceId = db
    .insert(otelTraceResourceTable)
    .values({
      attriubuteHash: resourceAttributeHash,
    })
    .returning({
      id: otelTraceResourceTable.id,
    })
    .get()?.id
  if (!newResourceId) {
    throw new Error(
      'Encountered an error while creating a new resource for OTel trace ingestion'
    )
  }

  // Insert the relationships between the resource and the attributes
  if (attributeIds.length > 0) {
    db.insert(otelTraceResourceAttributeTable)
      .values(
        attributeIds.map((id) => ({
          attributeId: id,
          resourceId: newResourceId,
        }))
      )
      .run()
  }

  return newResourceId
}

// TODO: Type the spanScope parameter
function getSpanScopeId(spanScope: any): string {
  // Compute the hash of the scope for quick lookup of an existing entry
  const spanScopeHash = hashObject(spanScope)

  // Find an existing based on the hash
  const existingSpanScopeId = db
    .select({
      id: otelTraceSpanScopeTable.id,
    })
    .from(otelTraceSpanScopeTable)
    .where(eq(otelTraceSpanScopeTable.hash, spanScopeHash))
    .get()?.id
  if (existingSpanScopeId) {
    return existingSpanScopeId
  }

  // TODO: Span scopes can have custom attributes, but we don't currently record them

  // Insert the new span scope
  const newSpanScopeId = db
    .insert(otelTraceSpanScopeTable)
    .values({
      name: spanScope.name,
      version: spanScope.version,
      hash: spanScopeHash,
    })
    .returning({
      id: otelTraceSpanScopeTable.id,
    })
    .get()?.id
  if (!newSpanScopeId) {
    throw new Error(
      'Encountered an error while creating a new span scope for OTel trace ingestion'
    )
  }

  return newSpanScopeId
}

// TODO: Type the span parameter
function insertSpan(resourceId: string, spanScopeId: string, span: any) {
  // Insert the span
  const spanId = db
    .insert(otelTraceSpanTable)
    .values({
      resourceId,
      scopeId: spanScopeId,
      traceId: span.traceId,
      spanId: span.spanId,
      // traceState,
      parentSpanId: span.parentSpanId,
      // flags,
      name: span.name,
      kind: span.kind,
      startTime: span.startTimeUnixNano,
      endTime: span.endTimeUnixNano,
      statusCode: span.status?.code,
      statusMessage: span.status?.message,

      type: spanTypeId,
    })
    .returning({
      id: otelTraceSpanTable.id,
    })
    .get()?.id

  // Insert all the span attributes
  const attributeIds: string[] = []
  for (const attribute of span.attributes) {
    attributeIds.push(getAttributeId(attribute))
  }
  if (attributeIds.length > 0) {
    db.insert(otelTraceSpanAttributeTable)
      .values(
        attributeIds.map((id) => ({
          attributeId: id,
          spanId: spanId,
        }))
      )
      .run()
  }

  // Insert all the span events
  for (const event of span.events) {
    const eventId = db
      .insert(otelTraceSpanEventTable)
      .values({
        spanId,
        name: event.name,
        time: event.timeUnixNano,
      })
      .returning({
        id: otelTraceSpanEventTable.id,
      })
      .get()?.id

    // Insert all the span event attributes
    const attributeIds: string[] = []
    for (const attribute of event.attributes) {
      attributeIds.push(getAttributeId(attribute))
    }
    if (attributeIds.length > 0) {
      db.insert(otelTraceSpanEventAttributeTable)
        .values(
          attributeIds.map((id) => ({
            attributeId: id,
            eventId: eventId,
          }))
        )
        .run()
    }
  }

  // TODO: Support span links
}
