export const schema = gql`
  type OGTagPreview {
    id: ID!
    userAgent: String!
    error: Boolean!
    result: JSON
  }

  type Query {
    ogTagPreview(url: String!, customUserAgent: String): OGTagPreview! @skipAuth
  }
`;
