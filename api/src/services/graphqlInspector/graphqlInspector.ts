import fs from 'node:fs'

import { coverage } from '@graphql-inspector/core'
// /import { CodeFileLoader } from '@graphql-tools/code-file-loader'
import glob from 'glob'

import { SyntaxError } from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'
import { getSchema } from 'src/util/graphqlSchema'
import { getUserProjectPaths } from 'src/util/project'

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
 *
 * @see: https://github.com/kamilkisiela/graphql-inspector/tree/master/packages/core
 */

// Loads all GraphQL documents from the user's project
// used to determine schema coverage
const loadDocumentSources = async () => {
  const documentsGlob = `${
    getUserProjectPaths().web.src
  }/**/!(*.d).{ts,tsx,js,jsx}`

  const documents = []
  try {
    logger.info('Loading GraphQL documents')
    logger.info({ documentsGlob })

    glob(documentsGlob, (err, files) => {
      if (err) {
        console.error('Error reading files:', err)
        return
      }

      // Read the contents of each matched file
      files.forEach((file) => {
        fs.readFile(file, 'utf8', (err, content) => {
          if (err) {
            logger.error(`Error reading file ${file}:`, err)
            return
          }
          documents.push(content)
        })
      })
    })
  } catch (e) {
    logger.error(e, 'Error loading GraphQL documents')
  }

  return documents || []
}

// Returns a JSON object with schema coverage data
export const graphqlInspectorCoverage = async () => {
  try {
    const schema = await getSchema()

    const sources = await loadDocumentSources()
    logger.info({ sources }, 'graphqlInspectorCoverage sources')
    const results = coverage(schema, sources)

    logger.info({ results }, 'graphqlInspectorCoverage results')

    return results || {}
  } catch (e) {
    throw new SyntaxError(e)
  }
}
