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
function convertLongToBigInt({
  low,
  high,
  unsigned,
}: {
  low: number
  high: number
  unsigned?: boolean
}) {
  const lowBI = BigInt.asUintN(32, BigInt(low))
  const highBI = BigInt.asUintN(32, BigInt(high))
  const combined = (highBI << 32n) | lowBI
  return unsigned ? BigInt.asUintN(64, combined) : BigInt.asIntN(64, combined)
}
type LongType = Parameters<typeof convertLongToBigInt>[0]

async function createAttribute(attribute: KeyValue) {
  let attributeId = (
    await db.oTelTraceAttribute.findUnique({
      where: {
        hash: getMD5Hash(attribute),
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
    const affectedRows = await db.$executeRaw`INSERT INTO OTelTraceAttribute (
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
      ${getMD5Hash(attribute)},
      ${attribute.key},
      ${attributeValue},
      ${attributeType.replace('Value', '')}
    )`
    if (affectedRows !== 1) {
      throw new Error('Failed to create attribute')
    }
    attributeId = id
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
  const resourceRow = await db.oTelTraceResource.create({
    data: {
      attributesHash: getMD5Hash(resource.attributes),
      attributes: {
        connect: attributeIds.map((id) => ({ id })),
      },
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

  let scopeId = (
    await db.oTelTraceScope.findFirst({
      where: {
        AND: [
          {
            name: scope.name,
          },
          {
            version: scope.version,
          },
        ],
      },
      select: { id: true },
    })
  )?.id

  if (!scopeId) {
    scopeId = (
      await db.oTelTraceScope.create({
        data: {
          name: scope.name,
          version: scope.version,
          attributes: {
            connect: attributeIds.map((id) => ({ id })),
          },
        },
        select: {
          id: true,
        },
      })
    ).id
  }

  return scopeId
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

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  // Some guidance is available from:
  // https://github.com/open-telemetry/opentelemetry-proto/blob/main/docs/specification.md
  // Note the spec for OTLP traces is here:
  // https://github.com/open-telemetry/opentelemetry-proto/blob/main/opentelemetry/proto/trace/v1/trace.proto

  const { resourceSpans } = JSON.parse(event.body) as TracesData
  for (let i = 0; i < resourceSpans.length; i++) {
    const resourceId = await createResource(resourceSpans[i].resource)
    const scopeSpans = resourceSpans[i].scopeSpans
    for (let j = 0; j < scopeSpans.length; j++) {
      const scopeId = await createScope(scopeSpans[j].scope)
      const spans = scopeSpans[j].spans
      for (let k = 0; k < spans.length; k++) {
        await createSpan(spans[k], resourceId, scopeId)
      }
      logger.debug(`Ingested ${spans.length} OpenTelemetry spans`)
    }
  }

  // Invalidate the appropriate queries
  await liveQueryStore?.invalidate('Query.otelSpans')

  // TODO: Currently we always respond with a "full success" but we should respond dynamically based on how we got on
  //       with the parsing/ingesting
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }
}
