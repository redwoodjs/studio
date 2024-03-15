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

  interface FlightPreviewInfo {
    id: String!
    status: FlightStatus!
    startedAt: DateTime!
    endedAt: DateTime!
    hostname: String!
    caption: String!
  }

  type FlightsPreview implements FlightPreviewInfo {
    id: String!
    flights: [Flight!]!
    status: FlightStatus!
    statuses: [FlightStatus!]!
    startedAt: DateTime!
    endedAt: DateTime!
    hostname: String!
    caption: String!
  }

  type FlightPreview implements FlightPreviewInfo {
    id: String!
    flight: Flight!
    status: FlightStatus!
    startedAt: DateTime!
    endedAt: DateTime!
    hostname: String!
    caption: String!
  }

  type Query {
    flight(id: String!): Flight @skipAuth
    flights: [Flight!]! @skipAuth
    flightPreview(id: String!): FlightPreview @skipAuth
    flightsPreview: FlightsPreview @skipAuth
  }
`
