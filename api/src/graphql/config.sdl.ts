export const schema = gql`
  type GraphiQLConfig {
    id: String!
    endpoint: String
    authImpersonation: AuthImpersonationConfig
  }

  type AuthImpersonationConfig {
    id: String!
    authProvider: String
    userId: String
    email: String
    # TODO: Add support for roles
    # roles: [String]
    jwtSecret: String
  }

  type WebConfig {
    id: String!
    host: String
    port: Int
    apiUrl: String
  }
  type StudioConfig {
    id: String!
    basePort: Int
    graphiql: GraphiQLConfig
  }

  type EnabledStatus {
    status: Boolean
    message: String
  }

  type StreamingSsrConfig {
    id: String!
    enabled: EnabledStatus
  }

  type UserProjectConfig {
    id: String!
    ssr: StreamingSsrConfig
    web: WebConfig
  }

  type Query {
    userProjectConfig: UserProjectConfig @skipAuth
    studioConfig: StudioConfig @skipAuth
  }
`
