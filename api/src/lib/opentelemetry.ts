import { db } from 'src/lib/db'
import { KeyValue } from 'src/types/typescript/opentelemetry/proto/common/v1/common'
import { getUserProjectPaths } from 'src/util/project'

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
    const typeId = await getTypeIDForName('HTTP')
    const method = attributes?.find(
      (attribute) => attribute.key === 'http.method'
    ).value.stringValue
    const url = attributes?.find((attribute) => attribute.key === 'http.url')
      .value.stringValue
    const brief = `${method} ${url}`.substring(0, 255)

    return {
      typeId,
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
    const typeId = await getTypeIDForName('GRAPHQL')
    const operationType = attributes?.find(
      (attribute) => attribute.key === 'graphql.operation.type'
    ).value.stringValue
    const operationName = attributes?.find(
      (attribute) => attribute.key === 'graphql.operation.name'
    ).value.stringValue
    const brief = `${operationType} ${operationName}`.substring(0, 255).trim()

    return {
      typeId,
      brief,
    }
  }

  // SQL
  const isSQL = attributes?.some(
    (attribute) => attribute.key === 'db.statement'
  )
  if (isSQL) {
    const typeId = await getTypeIDForName('SQL')
    const brief = attributes
      ?.find((attribute) => attribute.key === 'db.statement')
      .value.stringValue?.substring(0, 255)
    return {
      typeId,
      brief,
    }
  }

  // Prisma
  const isPrisma = name.startsWith('prisma:client:')
  if (isPrisma) {
    const typeId = await getTypeIDForName('PRISMA')
    const brief = attributes
      .find((attribute) => attribute.key === 'name')
      ?.value.stringValue?.substring(0, 255)
    return {
      typeId,
      brief,
    }
  }

  // Redwood Service
  const isRedwoodService = name.startsWith('redwoodjs:api:services')
  if (isRedwoodService) {
    const typeId = await getTypeIDForName('REDWOOD_SERVICE')
    const brief = getRelativeCodeFilepath(
      attributes.find((attribute) => attribute.key === 'name')?.value
        .stringValue ?? ''
    ).substring(0, 255)
    return {
      typeId,
      brief,
    }
  }

  // Redwood Function
  const isRedwoodFunction = name.startsWith('redwoodjs:api:functions')
  if (isRedwoodFunction) {
    const typeId = await getTypeIDForName('REDWOOD_FUNCTION')
    const brief = getRelativeCodeFilepath(
      attributes.find((attribute) => attribute.key === 'name')?.value
        .stringValue ?? ''
    ).substring(0, 255)
    return {
      typeId,
      brief,
    }
  }

  // Generic: the default to fall back to, no brief in this case
  return {
    typeId: await getTypeIDForName('GENERIC'),
  }
}

// These IDs are highly unlikely to change, so we can cache them in memory to avoid
// hitting the database on every span ingest
const typeIDCache: Record<string, string> = {}
async function getTypeIDForName(name: string) {
  if (typeIDCache[name]) {
    return typeIDCache[name]
  }
  const typeId = (
    await db.oTelTraceSpanType.findUnique({
      where: {
        name: name.toUpperCase(),
      },
      select: {
        id: true,
      },
    })
  ).id
  typeIDCache[name] = typeId
  return typeId
}

function getRelativeCodeFilepath(filepath: string) {
  const projectRoot = getUserProjectPaths().base
  return filepath.replace(projectRoot, '')
}
