export const schema = gql`
  type OpenTelemetryAttribute {
    id: ID!
    key: String!
    value: JSON!
    type: String!
    hash: String!
  }

  type OpenTelemetrySpanEvent {
    id: ID!
    spanId: String!
    name: String!
    time: String!
    attributes: [OpenTelemetryAttribute!]!
  }

  type OpenTelemetrySpan {
    id: ID!
    traceId: String!
    spanId: String!
    parentId: String
    name: String!
    kind: Int!
    startTime: String!
    endTime: String!
    statusCode: Int!
    statusMessage: String!
    attributes: [OpenTelemetryAttribute!]!
    events: [OpenTelemetrySpanEvent!]!
    # TODO: Resource
    # TODO: Scope
  }

  type Query {
    opentelemetrySpans: [OpenTelemetrySpan!]! @skipAuth
  }
`
