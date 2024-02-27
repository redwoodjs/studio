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

  type OGTagPreviewProviderAudit {
    provider: OGPreviewProvider!
    audit: OGTagPreviewAudit!
  }

  type OGTagPreviewAudit {
    messages: [String]!
    severity: OGPreviewSeverity!
  }

  type OGTagPreviewData {
    id: ID!
    userAgent: String!
    error: Boolean!
    result: JSON
    audits: [OGTagPreviewProviderAudit!]
  }

  type Query {
    ogTagPreview(url: String!, customUserAgent: String): OGTagPreviewData!
      @skipAuth
  }
`
