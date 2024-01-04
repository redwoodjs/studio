import { KeyValue } from 'src/types/typescript/opentelemetry/proto/common/v1/common'
import { getUserProjectPaths } from 'src/util/project'

import { db } from './db'

export async function detectSpanTypeAndBrief({
  name,
  attributes,
}: {
  name: string
  attributes?: KeyValue[]
}): Promise<{
  typeId: string
  brief?: string
}> {
  // HTTP
  const isHTTP = attributes?.some(
    (attribute) => attribute.key === 'http.method'
  )
  if (isHTTP) {
    const method = attributes?.find(
      (attribute) => attribute.key === 'http.method'
    ).value.stringValue
    const url = attributes?.find((attribute) => attribute.key === 'http.url')
      .value.stringValue
    const brief = `${method} ${url}`.substring(0, 255)

    return {
      typeId: 'HTTP',
      brief,
    }
  }

  // GraphQL
  const graphqlAttributes = [
    'graphql.operation.type',
    'graphql.operation.name',
    'graphql.operation.document',
    'graphql.execute.operationName',
    'graphql.execute.document',
    'graphql.execute.result',
    'graphql.execute.error',
    'graphql.execute.variables',
  ]
  const isGraphQL = attributes?.some((attribute) => {
    return graphqlAttributes.includes(attribute.key)
  })
  if (isGraphQL) {
    const operationType = attributes?.find(
      (attribute) => attribute.key === 'graphql.operation.type'
    )?.value.stringValue
    const operationName = attributes?.find(
      (attribute) => attribute.key === 'graphql.operation.name'
    )?.value.stringValue
    const brief = `${operationType} ${operationName}`.substring(0, 255).trim()

    return {
      typeId: 'GRAPHQL',
      brief,
    }
  }

  // SQL
  const isSQL = attributes?.some(
    (attribute) => attribute.key === 'db.statement'
  )
  if (isSQL) {
    const brief = attributes
      ?.find((attribute) => attribute.key === 'db.statement')
      .value.stringValue?.substring(0, 255)
    return {
      typeId: 'SQL',
      brief,
    }
  }

  // Prisma
  const isPrisma = name.startsWith('prisma:client:')
  if (isPrisma) {
    const brief = attributes
      .find((attribute) => attribute.key === 'name')
      ?.value.stringValue?.substring(0, 255)
    return {
      typeId: 'PRISMA',
      brief,
    }
  }

  // Redwood Service
  const isRedwoodService = name.startsWith('redwoodjs:api:services')
  if (isRedwoodService) {
    const brief = getRelativeCodeFilepath(
      attributes.find((attribute) => attribute.key === 'name')?.value
        .stringValue ?? ''
    ).substring(0, 255)
    return {
      typeId: 'REDWOOD_SERVICE',
      brief,
    }
  }

  // Redwood Function
  const isRedwoodFunction = name.startsWith('redwoodjs:api:functions')
  if (isRedwoodFunction) {
    const brief = getRelativeCodeFilepath(
      attributes.find((attribute) => attribute.key === 'name')?.value
        .stringValue ?? ''
    ).substring(0, 255)
    return {
      typeId: 'REDWOOD_FUNCTION',
      brief,
    }
  }

  // Generic: the default to fall back to, no brief in this case
  return {
    typeId: 'GENERIC',
  }
}

// This is awfully inefficient
export async function retypeSpan({ id }: { id: string }) {
  const span = await db.oTelTraceSpan.findUnique({
    where: { id },
    include: {
      attributes: true,
    },
  })
  if (!span) {
    throw new Error(`Span not found: ${id}`)
  }

  // Convert back to KeyValue[] format
  const attributes =
    (await db.$queryRaw`SELECT id, [value] FROM OTelTraceAttribute;`) as {
      id: string
      value: string
    }[]
  const attributeValueMap = new Map<string, string>()
  for (let i = 0; i < attributes.length; i++) {
    attributeValueMap.set(attributes[i].id, attributes[i].value)
  }
  const convertedSpanAttributes = span.attributes.map((attribute) => ({
    key: attribute.key,
    value: {
      // NOTE: Only handles string values for now, but this is fine as long as
      // detectSpanTypeAndBrief also only handles string values
      stringValue: attributeValueMap.get(attribute.id) ?? '',
    },
  }))

  const { typeId, brief } = await detectSpanTypeAndBrief({
    name: span.name,
    attributes: convertedSpanAttributes,
  })
  await db.oTelTraceSpan.update({
    where: { id },
    data: {
      type: {
        connect: {
          id: typeId,
        },
      },
      brief,
    },
  })
}

function getRelativeCodeFilepath(filepath: string) {
  const projectRoot = getUserProjectPaths().base
  return filepath.replace(projectRoot, '')
}
