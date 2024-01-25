import crypto from 'node:crypto'
import path from 'node:path'

import { getCachedDocumentNodeFromSchema } from '@graphql-codegen/plugin-helpers'
import { CodeFileLoader } from '@graphql-tools/code-file-loader'
import { loadSchema, LoadSchemaOptions } from '@graphql-tools/load'
import { print, visit } from 'graphql'

import { rootSchema } from '@redwoodjs/graphql-server'
import { getConfigPath, getPaths } from '@redwoodjs/project-config'

import type { Relationship } from '../../types/graphql'

export const getSchema = async () => {
  const studioRootDir = path.dirname(getConfigPath())
  const userProjectRootDir = path.dirname(
    getConfigPath(path.join(studioRootDir, '..'))
  )

  const userProjectPaths = getPaths(userProjectRootDir)

  const schemaPointerMap = {
    [print(rootSchema.schema)]: {},
    'graphql/**/*.sdl.{js,ts}': {},
    'directives/**/*.{js,ts}': {},
    'subscriptions/**/*.{js,ts}': {},
  }

  const loadSchemaConfig: LoadSchemaOptions = {
    assumeValidSDL: true,
    sort: true,
    convertExtensions: true,
    includeSources: true,
    cwd: userProjectPaths.api.src,
    schema: Object.keys(schemaPointerMap),
    generates: {
      [userProjectPaths.generated.schema]: {
        plugins: ['schema-ast'],
      },
    },
    silent: false,
    errorsOnly: false,
    pluginContext: {},
    loaders: [new CodeFileLoader()],
  }

  return loadSchema(schemaPointerMap, loadSchemaConfig)
}

export const getGraphQLSchemaInfo = async () => {
  const schema = await getSchema()
  const documentNode = getCachedDocumentNodeFromSchema(schema)

  const ast = JSON.stringify(documentNode.definitions)
  const id = crypto.createHash('md5').update(ast).digest('hex')

  const definitions = []

  visit(documentNode, {
    DirectiveDefinition: (node) => {
      definitions.push(node)
    },
    ScalarTypeDefinition: (node) => {
      definitions.push(node)
    },
    ObjectTypeDefinition: (node) => {
      definitions.push(node)
    },
    InputObjectTypeDefinition: (node) => {
      definitions.push(node)
    },
    OperationDefinition: (node) => {
      definitions.push(node)
    },
  })

  const relationships = getGraphQLRelationships(definitions)

  // logger.info({ relationships }, 'GraphQL Relationships')

  return { id, ast, definitions, relationships }
}

interface FieldType {
  type?: FieldType
  name?: {
    value: string
  }
}

// recurse to the get the name of the type
const findNameAndValue = (field: FieldType): string | undefined => {
  if (field.name?.value) {
    return field.name.value
  }

  if (field.type) {
    return findNameAndValue(field.type)
  }

  return undefined
}

const getGraphQLRelationships = (definitions): Relationship[] => {
  const relationships: Relationship[] = []

  // The ObjectTypeDefinition will be types like your models
  // and also any queries and mutations.
  const objectTypeNames = definitions
    .filter((definition) => {
      return definition.kind === 'ObjectTypeDefinition'
    })
    .map((definition) => {
      return definition.name.value
    })

  definitions.forEach((definition) => {
    if (
      definition.kind === 'ObjectTypeDefinition' ||
      definition.kind === 'FieldDefinition'
    ) {
      const typeName = definition.name?.value

      // Check if the type has fields
      if (definition.fields) {
        definition.fields.forEach((field) => {
          const relatedFieldTypeName = findNameAndValue(field.type)

          // If one of these types has a field that is a known object type
          // then it is a relationship
          if (
            relatedFieldTypeName &&
            objectTypeNames.includes(relatedFieldTypeName)
          ) {
            relationships.push({
              source: typeName,
              target: relatedFieldTypeName,
              label: field.name.value,
            })
          }
        })
      }
    }
  })

  return relationships
}
