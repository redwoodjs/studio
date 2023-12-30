export const schema = gql`
  type OTelTraceAttribute {
    id: String!
    hash: String!
    key: String!
    value: JSON!
    type: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceResource {
    id: String!
    attributesHash: String!
    attributes: [OTelTraceAttribute!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceSpan {
    id: String!
    type: OTelTraceSpanType!
    brief: String
    traceId: String!
    traceState: String
    spanId: String!
    parentId: String
    name: String!
    flags: Int
    kind: Int
    startTimeNano: String! # BigInt!
    endTimeNano: String! # BigInt!
    attributes: [OTelTraceAttribute!]!
    events: [OTelTraceEvent!]!
    links: [OTelTraceLink!]!
    statusMessage: String
    statusCode: Int
    scope: OTelTraceScope!
    resource: OTelTraceResource!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceSpanType {
    id: String!
    name: String!
    colour: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceEvent {
    id: String!
    startTimeNano: String! # BigInt!
    name: String!
    attributes: [OTelTraceAttribute!]!
    # span: OTelTraceSpan!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceLink {
    id: String!
    traceId: String!
    spanId: String!
    traceState: String
    flags: Int
    # span: OTelTraceSpan!
    attributes: [OTelTraceAttribute!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type OTelTraceScope {
    id: String!
    name: String!
    version: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    otelSpans: [OTelTraceSpan!]! @skipAuth
    otelSpan(id: String!): OTelTraceSpan @skipAuth
    otelSpanAncestors(id: String!): [OTelTraceSpan!]! @skipAuth
    otelSpanDescendants(id: String!): [OTelTraceSpan!]! @skipAuth
    otelTraceIds: [String!]! @skipAuth
  }
`
