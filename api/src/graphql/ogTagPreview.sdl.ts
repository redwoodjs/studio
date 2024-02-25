export const schema = gql`
  enum OGPreviewSeverity {
    WARNING
    ERROR
    OK
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
    audit: OGTagPreviewAudit!
  }

  type Query {
    ogTagPreview(url: String!, customUserAgent: String): OGTagPreviewData!
      @skipAuth
  }
`
