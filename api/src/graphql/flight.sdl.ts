export const schema = gql`
  type Flight {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    encodedPayload: String!
    encoding: String!
    payload: String!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
  }
`
