import crypto from 'node:crypto'

import type { APIGatewayEvent, Context } from 'aws-lambda'

import { liveQueryStore } from '@redwoodjs/realtime'

import { db, generateTypicalValues } from 'src/lib/db'
import { logger } from 'src/lib/logger'
// NOTE: These types aren't perfect but they're better than 'any' everywhere
import { detectSpanTypeAndBrief } from 'src/lib/opentelemetry'
import {
  InstrumentationScope,
  KeyValue,
} from 'src/types/typescript/opentelemetry/proto/common/v1/common'
import {
  ResourceSpans,
  Span,
  TracesData,
} from 'src/types/typescript/opentelemetry/proto/trace/v1/trace'

// TODO: Have this imported from 'src/lib/db'
import { Prisma } from '../../../db/client'

// TODO: There are so many loops which await promises internally. We should
//       try and optimise this with the Promise.all or whatever

function getMD5Hash(value: unknown) {
  return crypto.createHash('md5').update(JSON.stringify(value)).digest('hex')
}

// TODO: Move this somewhere more appropriate
type Long = {
  low: number
  high: number
  unsigned?: boolean
}
function convertLongToBigInt(input: Long | string) {
  if (typeof input === 'string') {
    return BigInt(input)
  }
  const { low, high, unsigned } = input
  const lowBI = BigInt.asUintN(32, BigInt(low))
  const highBI = BigInt.asUintN(32, BigInt(high))
  const combined = (highBI << 32n) | lowBI
  return unsigned ? BigInt.asUintN(64, combined) : BigInt.asIntN(64, combined)
}
type LongType = Parameters<typeof convertLongToBigInt>[0]

async function createAttribute(attribute: KeyValue) {
  const hash = getMD5Hash(attribute)
  const attributeId = (
    await db.oTelTraceAttribute.findUnique({
      where: {
        hash,
      },
      select: {
        id: true,
      },
    })
  )?.id
  if (!attributeId) {
    // Create the attribute
    const { id, createdAt, updatedAt } = generateTypicalValues()
    const attributeType = Object.keys(attribute.value)[0]
    const attributeValue = JSON.stringify(attribute.value[attributeType])
    const _rowsAffected = await db.$executeRaw`INSERT INTO OTelTraceAttribute (
      id,
      createdAt,
      updatedAt,
      [hash],
      [key],
      [value],
      [type]
    ) VALUES (
      ${id},
      ${createdAt},
      ${updatedAt},
      ${hash},
      ${attribute.key},
      ${attributeValue},
      ${attributeType.replace('Value', '')}
    ) ON CONFLICT ([hash]) DO NOTHING;`
    const { id: createdId } = await db.oTelTraceAttribute.findUnique({
      where: {
        hash,
      },
      select: {
        id: true,
      },
    })
    return createdId
  }
  return attributeId
}

async function createResource(
  resource: ResourceSpans['resource']
): Promise<string> {
  // Find an existing resource
  const resourceAttributesHash = getMD5Hash(resource.attributes)
  const existingResource = await db.oTelTraceResource.findUnique({
    where: { attributesHash: resourceAttributesHash },
    select: {
      id: true,
    },
  })
  if (existingResource?.id) {
    return existingResource.id
  }

  // Create the individual attributes
  const attributeIds: string[] = []
  for (let i = 0; i < resource.attributes.length; i++) {
    attributeIds.push(await createAttribute(resource.attributes[i]))
  }

  // Create the resource
  const resourceRow = await db.oTelTraceResource.upsert({
    where: {
      attributesHash: resourceAttributesHash,
    },
    create: {
      attributesHash: resourceAttributesHash,
      attributes: {
        connect: attributeIds.map((id) => ({ id })),
      },
    },
    update: {
      // Do nothing
    },
    select: {
      id: true,
    },
  })

  return resourceRow.id
}

async function createScope(scope: InstrumentationScope) {
  const attributeIds: string[] = []
  if (scope.attributes !== undefined) {
    for (let i = 0; i < scope.attributes.length; i++) {
      attributeIds.push(await createAttribute(scope.attributes[i]))
    }
  }

  // It has to have a value as we use it within a unique constraint
  const version = scope.version ?? '__unversioned__'

  const scopeInDb = await db.oTelTraceScope.upsert({
    where: {
      OTelTraceScope_name_version_unique: {
        name: scope.name,
        version: version,
      },
    },
    create: {
      name: scope.name,
      version: version,
      attributes: {
        connect: attributeIds.map((id) => ({ id })),
      },
    },
    update: {
      // Do nothing
    },
    select: {
      id: true,
    },
  })

  return scopeInDb.id
}

async function createSpan(span: Span, resourceId: string, scopeId: string) {
  const attributeIds: string[] = []
  if (span.attributes !== undefined) {
    for (let i = 0; i < span.attributes.length; i++) {
      attributeIds.push(await createAttribute(span.attributes[i]))
    }
  }

  const events: Prisma.OTelTraceEventCreateWithoutSpanInput[] = []
  if (span.events !== undefined) {
    for (let i = 0; i < span.events.length; i++) {
      const event = span.events[i]
      const eventAttributeIds: string[] = []
      if (event.attributes !== undefined) {
        for (let j = 0; j < event.attributes.length; j++) {
          eventAttributeIds.push(await createAttribute(event.attributes[j]))
        }
      }
      events.push({
        name: event.name,
        startTimeNano: convertLongToBigInt(
          event.timeUnixNano as unknown as LongType
        ),
        attributes: {
          connect: eventAttributeIds.map((id) => ({ id })),
        },
      })
    }
  }

  const links: Prisma.OTelTraceLinkCreateWithoutSpanInput[] = []
  if (span.links !== undefined) {
    for (let i = 0; i < span.links.length; i++) {
      const link = span.links[i]
      const linkAttributeIds: string[] = []
      if (link.attributes !== undefined) {
        for (let j = 0; j < link.attributes.length; j++) {
          linkAttributeIds.push(await createAttribute(link.attributes[j]))
        }
      }
      links.push({
        spanId: link.spanId as unknown as string,
        traceId: link.traceId as unknown as string,
        traceState: link.traceState,
        flags: link.flags,
        attributes: {
          connect: linkAttributeIds.map((id) => ({ id })),
        },
      })
    }
  }

  const { typeId: spanTypeId, brief: spanBrief } = await detectSpanTypeAndBrief(
    { name: span.name, attributes: span.attributes }
  )

  await db.oTelTraceSpan.create({
    data: {
      typeId: spanTypeId,
      brief: spanBrief,
      traceId: span.traceId as unknown as string,
      traceState: span.traceState,
      spanId: span.spanId as unknown as string,
      parentId: span.parentSpanId as unknown as string,
      name: span.name,
      flags: span.flags,
      kind: span.kind,
      startTimeNano: convertLongToBigInt(
        span.startTimeUnixNano as unknown as LongType
      ),
      endTimeNano: convertLongToBigInt(
        span.endTimeUnixNano as unknown as LongType
      ),
      attributes: {
        connect: attributeIds.map((id) => ({ id })),
      },
      events: {
        create: events,
      },
      links: {
        create: links,
      },
      statusMessage: span.status.message,
      statusCode: span.status.code,
      resourceId,
      scopeId,
    },
    select: {
      id: true,
    },
  })
}

let spanProcessingInterval: NodeJS.Timeout | null = null
const spanDataQueue: string[] = []
export const startSpanProcessor = async () => {
  logger.info('Starting OpenTelemetry span processor')

  if (spanProcessingInterval) {
    clearInterval(spanProcessingInterval)
  }

  const processSpanBatch = async () => {
    if (spanDataQueue.length === 0) {
      return
    }
    const spans = spanDataQueue.splice(0, spanDataQueue.length)
    await Promise.allSettled(spans.map(processSpan))

    // Invalidate the appropriate queries
    await liveQueryStore?.invalidate('Query.otelSpans')
    await liveQueryStore?.invalidate('Query.otelTraces')
    await liveQueryStore?.invalidate('Query.otelSpanCount')
    await liveQueryStore?.invalidate('Query.otelTraceCount')

    logger.info(`Processed ${spans.length} OpenTelemetry spans`)
  }

  spanProcessingInterval = setInterval(processSpanBatch, 1000)
}

// Some guidance is available from:
// https://github.com/open-telemetry/opentelemetry-proto/blob/main/docs/specification.md
// Note the spec for OTLP traces is here:
// https://github.com/open-telemetry/opentelemetry-proto/blob/main/opentelemetry/proto/trace/v1/trace.proto
const processSpan = async (body: string) => {
  const { resourceSpans } = JSON.parse(body) as TracesData
  for (let i = 0; i < resourceSpans.length; i++) {
    const resourceId = await createResource(resourceSpans[i].resource)
    const scopeSpans = resourceSpans[i].scopeSpans
    for (let j = 0; j < scopeSpans.length; j++) {
      const scopeId = await createScope(scopeSpans[j].scope)
      const spans = scopeSpans[j].spans
      for (let k = 0; k < spans.length; k++) {
        try {
          await createSpan(spans[k], resourceId, scopeId)
        } catch (error) {
          logger.error('Failed to ingest span')
          logger.error(error)
        }
      }
      logger.debug(`Ingested ${spans.length} OpenTelemetry spans`)
    }
  }
}

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  spanDataQueue.push(event.body)

  // TODO: Currently we always respond with a "full success" but we should respond dynamically based on how we got on
  //       with the parsing/ingesting
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{}',
  }
}
