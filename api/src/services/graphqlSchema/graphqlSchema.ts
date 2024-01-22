import type { QueryResolvers } from 'types/graphql'

import { getGraphQLSchemaInfo } from 'src/util/graphqlSchema'

export const graphqlSchema: QueryResolvers['graphqlSchema'] = async () => {
  const { id, ast, definitions } = await getGraphQLSchemaInfo()

  return {
    id,
    ast,
    definitions: JSON.stringify(definitions),
  }
}
