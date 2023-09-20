import fs from 'node:fs'
import crypto from 'node:crypto'

import { getUserProjectPaths } from 'src/util/project'
import type { QueryResolvers } from 'types/graphql'

import { transformDMMF } from 'prisma-json-schema-generator/dist/generator/transformDMMF'
import { getPrismaDMMF } from 'src/util/database'

export const prismaSchema: QueryResolvers['prismaSchema'] = async () => {
  // Get the schema location
  const schemaPath = getUserProjectPaths().api.dbSchema
  const schema = fs.readFileSync(schemaPath, { encoding: 'utf-8', flag: 'r' })

  // Hash the schema as an ID
  const schemaHash = crypto.createHash('sha256').update(schema).digest('hex')

  // Generate the JSON schema
  const jsonSchema = transformDMMF(await getPrismaDMMF())

  return {
    id: schemaHash,
    schema: jsonSchema
  }
}
