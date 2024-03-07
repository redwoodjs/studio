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

  type PerformanceTiming {
    startTime: Float!
    firstByte: Float!
    lastByte: Float!
    totalTime: Float!
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
    performanceTiming: PerformanceTiming!
  }

  type Query {
    ogTagPreview(url: String!, customUserAgent: String): OGTagPreviewResponse!
      @skipAuth
  }
`
