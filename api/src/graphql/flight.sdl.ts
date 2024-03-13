export const schema = gql`
  type FlightPerformance {
    startedAt: DateTime!
    endedAt: DateTime!
    duration: Float!
    sizeInBytes: Float!
  }

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
    performance: FlightPerformance!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
  }
`
