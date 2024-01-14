export const schema = gql`
  type AuthHeaders {
    authProvider: String!
    authorization: String!
    cookie: String
  }

  type Query {
    generateAuthHeaders: AuthHeaders @skipAuth
  }
`
