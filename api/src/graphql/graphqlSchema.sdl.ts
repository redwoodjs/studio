export const schema = gql`
  type Relationship {
    source: String!
    target: String!
    label: String
  }
  type GraphQLSchema {
    id: ID!

    # TODO: This should really return much more granular information/types
    ast: String!
    definitions: String!
    relationships: [Relationship!]!
  }

  type Query {
    graphqlSchema: GraphQLSchema! @skipAuth
  }
`
