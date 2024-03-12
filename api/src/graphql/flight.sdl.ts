export const schema = gql`
  type Flight {
    id: String!
    encodedPayload: String!
    encoding: String!
    payload: String!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
  }
`
