export const schema = gql`
  type Query {
    graphqlInspectorCoverage: JSON! @skipAuth
  }
`
