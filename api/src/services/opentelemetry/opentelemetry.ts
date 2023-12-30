import { OTelTraceSpan, QueryResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const otelSpans: QueryResolvers['otelSpans'] = async () => {
  const incompleteData = await db.oTelTraceSpan.findMany({
    orderBy: {
      startTimeNano: 'desc',
    },
    include: {
      attributes: true,
      events: {
        include: {
          attributes: true,
        },
      },
      links: {
        include: {
          attributes: true,
        },
      },
      scope: {
        include: {
          attributes: true,
        },
      },
      resource: {
        include: {
          attributes: true,
        },
      },
      type: true,
    },
  })

  const attributes =
    (await db.$queryRaw`SELECT id, [value] FROM OTelTraceAttribute;`) as {
      id: string
      value: string
    }[]
  const attributeValueMap = new Map<string, string>()
  for (let i = 0; i < attributes.length; i++) {
    attributeValueMap.set(attributes[i].id, attributes[i].value)
  }

  // NOTE: This is awful
  const completeData: OTelTraceSpan[] = []
  for (let i = 0; i < incompleteData.length; i++) {
    completeData.push({
      ...incompleteData[i],
      startTimeNano: incompleteData[i].startTimeNano.toString(),
      endTimeNano: incompleteData[i].endTimeNano.toString(),
      attributes: incompleteData[i].attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
      events: incompleteData[i].events.map((event) => ({
        ...event,
        startTimeNano: event.startTimeNano.toString(),
        attributes: event.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      })),
      links: incompleteData[i].links.map((link) => ({
        ...link,
        attributes: link.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      })),
      resource: {
        ...incompleteData[i].resource,
        attributes: incompleteData[i].resource.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      },
    })
  }

  return completeData
}

export const otelSpan: QueryResolvers['otelSpan'] = async ({ id }) => {
  const originalData = await db.oTelTraceSpan.findUnique({
    where: {
      spanId: id,
    },
    include: {
      attributes: true,
      events: {
        include: {
          attributes: true,
        },
      },
      links: {
        include: {
          attributes: true,
        },
      },
      scope: {
        include: {
          attributes: true,
        },
      },
      resource: {
        include: {
          attributes: true,
        },
      },
      type: true,
    },
  })

  if (originalData === null) {
    throw new ValidationError('No span with that ID found')
  }

  const attributes =
    (await db.$queryRaw`SELECT id, [value] FROM OTelTraceAttribute;`) as {
      id: string
      value: string
    }[]
  const attributeValueMap = new Map<string, string>()
  for (let i = 0; i < attributes.length; i++) {
    attributeValueMap.set(attributes[i].id, attributes[i].value)
  }

  const completeData = {
    ...originalData,
    startTimeNano: originalData.startTimeNano.toString(),
    endTimeNano: originalData.endTimeNano.toString(),
    attributes: originalData.attributes.map((attribute) => ({
      ...attribute,
      value: JSON.parse(attributeValueMap.get(attribute.id)),
    })),
    events: originalData.events.map((event) => ({
      ...event,
      startTimeNano: event.startTimeNano.toString(),
      attributes: event.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    })),
    links: originalData.links.map((link) => ({
      ...link,
      attributes: link.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    })),
    resource: {
      ...originalData.resource,
      attributes: originalData.resource.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    },
  }

  return completeData
}

export const otelSpanAncestors: QueryResolvers['otelSpanAncestors'] = async ({
  id,
}) => {
  const rawAncestorIDs = (await db.$queryRaw`WITH RECURSIVE span_hierarchy AS (
      SELECT spanId, parentId
      FROM OTelTraceSpan
      WHERE spanId = ${id}
      UNION ALL
      SELECT s.spanId, s.parentId
      FROM OTelTraceSpan s
      JOIN span_hierarchy sh ON s.spanId = sh.parentId
    )
    SELECT spanId
    FROM span_hierarchy;`) as {
    spanId: string
  }[]
  const ancestorIDs = rawAncestorIDs
    .map((ancestor) => ancestor.spanId)
    .filter((ancestor) => ancestor !== id)

  const rawData = await db.oTelTraceSpan.findMany({
    where: {
      spanId: {
        in: ancestorIDs,
      },
    },
    orderBy: {
      startTimeNano: 'asc',
    },
    include: {
      attributes: true,
      events: {
        include: {
          attributes: true,
        },
      },
      links: {
        include: {
          attributes: true,
        },
      },
      scope: {
        include: {
          attributes: true,
        },
      },
      resource: {
        include: {
          attributes: true,
        },
      },
      type: true,
    },
  })

  const attributes =
    (await db.$queryRaw`SELECT id, [value] FROM OTelTraceAttribute;`) as {
      id: string
      value: string
    }[]
  const attributeValueMap = new Map<string, string>()
  for (let i = 0; i < attributes.length; i++) {
    attributeValueMap.set(attributes[i].id, attributes[i].value)
  }

  const completeData = rawData.map((data) => ({
    ...data,
    startTimeNano: data.startTimeNano.toString(),
    endTimeNano: data.endTimeNano.toString(),
    attributes: data.attributes.map((attribute) => ({
      ...attribute,
      value: JSON.parse(attributeValueMap.get(attribute.id)),
    })),
    events: data.events.map((event) => ({
      ...event,
      startTimeNano: event.startTimeNano.toString(),
      attributes: event.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    })),
    links: data.links.map((link) => ({
      ...link,
      attributes: link.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    })),
    resource: {
      ...data.resource,
      attributes: data.resource.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
    },
  }))

  return completeData
}

export const otelSpanDescendants: QueryResolvers['otelSpanDescendants'] =
  async ({ id }) => {
    const rawDescendantIDs =
      (await db.$queryRaw`WITH RECURSIVE span_hierarchy AS (
        SELECT spanId, parentId
        FROM OTelTraceSpan
        WHERE spanId = ${id}
        UNION ALL
        SELECT s.spanId, s.parentId
        FROM OTelTraceSpan s
        JOIN span_hierarchy sh ON s.parentId = sh.spanId
      )
      SELECT spanId
      FROM span_hierarchy;
  `) as {
        spanId: string
      }[]
    const descendantIDs = rawDescendantIDs
      .map((descendant) => descendant.spanId)
      .filter((descendant) => descendant !== id)

    const rawData = await db.oTelTraceSpan.findMany({
      where: {
        spanId: {
          in: descendantIDs,
        },
      },
      orderBy: {
        startTimeNano: 'asc',
      },
      include: {
        attributes: true,
        events: {
          include: {
            attributes: true,
          },
        },
        links: {
          include: {
            attributes: true,
          },
        },
        scope: {
          include: {
            attributes: true,
          },
        },
        resource: {
          include: {
            attributes: true,
          },
        },
        type: true,
      },
    })

    const attributes =
      (await db.$queryRaw`SELECT id, [value] FROM OTelTraceAttribute;`) as {
        id: string
        value: string
      }[]
    const attributeValueMap = new Map<string, string>()
    for (let i = 0; i < attributes.length; i++) {
      attributeValueMap.set(attributes[i].id, attributes[i].value)
    }

    const completeData = rawData.map((data) => ({
      ...data,
      startTimeNano: data.startTimeNano.toString(),
      endTimeNano: data.endTimeNano.toString(),
      attributes: data.attributes.map((attribute) => ({
        ...attribute,
        value: JSON.parse(attributeValueMap.get(attribute.id)),
      })),
      events: data.events.map((event) => ({
        ...event,
        startTimeNano: event.startTimeNano.toString(),
        attributes: event.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      })),
      links: data.links.map((link) => ({
        ...link,
        attributes: link.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      })),
      resource: {
        ...data.resource,
        attributes: data.resource.attributes.map((attribute) => ({
          ...attribute,
          value: JSON.parse(attributeValueMap.get(attribute.id)),
        })),
      },
    }))

    return completeData
  }

export const otelTraceIds: QueryResolvers['otelTraceIds'] = async () => {
  return await db.oTelTraceSpan
    .findMany({
      select: {
        traceId: true,
      },
      orderBy: {
        startTimeNano: 'desc',
      },
      distinct: ['traceId'],
    })
    .then((traceIds) => traceIds.map((traceId) => traceId.traceId))
}
