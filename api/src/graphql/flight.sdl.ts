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

  enum FlightStatus {
    OK
    WARNING
    ERROR
  }

  type FlightsPreview {
    id: String!
    flights: [Flight!]!
    status: FlightStatus!
    statuses: [FlightStatus!]!
    startedAt: DateTime!
    endedAt: DateTime!
    hostname: String!
    caption: String!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
    flightsPreview: FlightsPreview @skipAuth
  }
`
