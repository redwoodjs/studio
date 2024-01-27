import type { QueryResolvers } from 'types/graphql'

import { getGraphQLSchemaInfo } from 'src/util/graphqlSchema'

export const graphqlSchema: QueryResolvers['graphqlSchema'] = async () => {
  const { id, definitions, relationships } = await getGraphQLSchemaInfo()

  return {
    id,
    definitions: JSON.stringify(definitions),
    relationships,
  }
}
