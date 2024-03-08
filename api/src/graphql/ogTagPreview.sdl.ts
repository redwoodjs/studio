export const schema = gql`
  enum OGPreviewSeverity {
    WARNING
    ERROR
    OK
  }

  enum OGPreviewProvider {
    GENERIC
    FACEBOOK
    TWITTER
    LINKEDIN
    DISCORD
    SLACK
  }

  type PerformanceMetric {
    startTime: Float!
    executionTime: Float!
    responseTime: Float!
    responseSize: Float!
  }

  type OGTagPreviewProviderAudit {
    provider: OGPreviewProvider!
    audit: OGTagPreviewAudit!
  }

  type OGTagPreviewAudit {
    messages: [String]!
    severity: OGPreviewSeverity!
  }

  type OGTagPreviewResponse {
    id: ID!
    userAgent: String!
    error: Boolean!
    result: JSON
    audits: [OGTagPreviewProviderAudit!]
    metrics: PerformanceMetric!
  }

  type Query {
    ogTagPreview(url: String!, customUserAgent: String): OGTagPreviewResponse!
      @skipAuth
  }
`
