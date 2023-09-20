export const schema = gql`
  type GraphQLSchema {
    id: ID!

    # TODO: This should really return much more granular information/types
    ast: String!
    definitions: String!
  }

  type Query {
    graphqlSchema: GraphQLSchema! @skipAuth
  }
`
