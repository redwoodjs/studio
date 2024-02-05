export const schema = gql`
  type GraphiQLConfig {
    endpoint: String
    authImpersonation: AuthImpersonationConfig
  }

  type AuthImpersonationConfig {
    authProvider: String
    userId: String
    email: String
    # TODO: Add support for roles
    # roles: [String]
    jwtSecret: String
  }

  type StudioConfig {
    basePort: Int
    graphiql: GraphiQLConfig
  }

  type WebConfig {
    graphqlEndpoint: String
  }

  type Query {
    studioConfig: StudioConfig @skipAuth
    webConfig: WebConfig @skipAuth
  }
`
