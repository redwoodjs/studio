import { OTelTraceSpan, QueryResolvers } from 'types/graphql'

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
