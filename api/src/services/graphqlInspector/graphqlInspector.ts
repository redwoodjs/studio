// import fs from 'node:fs'

import { coverage } from '@graphql-inspector/core'

import { SyntaxError } from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'
import { getSchema } from 'src/util/graphqlSchema'

/**
 * Note: graphql-inspector can perform a number of useful tasks, including:
 *
 * diff - Compares schemas
 * validate - Finds breaking or dangerous changes / Validates documents against a schema
 * similar - Finds similar / duplicated types
 * coverage - Schema coverage based on documents
 *
 * Currently, the only one we're using is coverage.
 *
 * However, coverage is not working as expected but to not loading the document sources
 * as it expects.
 *
 * It return coverage, but isn't applying the source documents to the schema.
 *
 * These documents live in the User's Project, not the Studio at the
 * generateTypeDefGraphQLWeb documents glob location.
 *
 * The next step is to figure out how to load the documents for sources,
 * perhaps using CodeFileLoader for graphql-tools
 *
 * @see: https://github.com/kamilkisiela/graphql-inspector/tree/master/packages/core
 */

// Returns a JSON object with schema coverage data
export const graphqlInspectorCoverage = async () => {
  try {
    const schema = await getSchema()

    const sources = []
    const results = coverage(schema, sources)

    logger.info({ results }, 'graphqlInspectorCoverage results')

    return results || {}
  } catch (e) {
    throw new SyntaxError(e)
  }
}
