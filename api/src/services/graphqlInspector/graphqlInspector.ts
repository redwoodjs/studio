import { validate } from '@graphql-inspector/core'

import { SyntaxError } from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'
import { getSchema } from 'src/util/graphqlSchema'

/**
 *
 * @returns import {
  diff,
  validate,
  similar,
  coverage,
  Change,
  InvalidDocument,
  SimilarMap,
  SchemaCoverage
} from '@graphql-inspector/core'

// diff
const changes: Change[] = diff(schemaA, schemaB)
// validate
const invalid: InvalidDocument[] = validate(documentsGlob, schema)
// similar
const similar: SimilarMap = similar(schema, typename, threshold)
// coverage
const schemaCoverage: SchemaCoverage = coverage(schema, documents)
// ...
 */

export const graphqlInspectorCoverage = async () => {
  try {
    const schema = await getSchema()
    logger.info(JSON.stringify(schema), 'graphqlInspectorCoverage schema')

    const results = validate(schema, [])

    logger.info(JSON.stringify(results), 'graphqlInspectorCoverage schema')
    return results || {}
  } catch (e) {
    throw new SyntaxError(e)
  }
}
