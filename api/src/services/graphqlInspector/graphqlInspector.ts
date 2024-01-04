import { coverage } from '@graphql-inspector/core'

// import { makeMergedSchema } from "@redwoodjs/graphql-server"

export const graphqlInspectorCoverage = async () => {
  const results = coverage(null, null)
  return results
}
