import crypto from 'node:crypto'
import path from 'node:path'

import { getCachedDocumentNodeFromSchema } from '@graphql-codegen/plugin-helpers'
import { CodeFileLoader } from '@graphql-tools/code-file-loader'
import { loadSchema, LoadSchemaOptions } from '@graphql-tools/load'
import { print, visit } from 'graphql'
import type { QueryResolvers } from 'types/graphql'

import { rootSchema } from '@redwoodjs/graphql-server'
import { getConfigPath, getPaths } from '@redwoodjs/project-config'

async function getSchema() {
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

export const graphqlSchema: QueryResolvers['graphqlSchema'] = async () => {
  const schema = getCachedDocumentNodeFromSchema(await getSchema())

  const ast = JSON.stringify(schema.definitions)
  const id = crypto.createHash('md5').update(ast).digest('hex')

  const definitions = []

  visit(schema, {
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

  return {
    id,
    ast,
    definitions: JSON.stringify(definitions),
  }
}
