import { coverage } from '@graphql-inspector/core'

import { SyntaxError } from '@redwoodjs/graphql-server'

// import { makeMergedSchema } from "@redwoodjs/graphql-server"

export const graphqlInspectorCoverage = async () => {
  try {
    const results = coverage(null, null)
    return results || {}
  } catch (e) {
    throw new SyntaxError(e)
  }
}
