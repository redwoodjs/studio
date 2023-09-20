export const schema = gql`
  type ConnectionStatus {
    id: ID!
    developmentServer: Boolean!
  }

  type Query {
    connectionStatus: ConnectionStatus! @skipAuth
  }
`
