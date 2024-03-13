export const schema = gql`
  type Flight {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    encodedPayload: String!
    encodedMetadata: String!
    encoding: String!
    payload: String!
    metadata: JSON!
    preview: String!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
  }
`
