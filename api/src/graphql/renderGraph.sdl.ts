export const schema = gql`
  type Route {
    id: ID
    name: String!
  }

  type RenderGraph {
    id: ID!
    route: Route!
    initialNodes: JSON
    initialEdges: JSON
  }
  type Query {
    renderGraph(routeName: String!): RenderGraph! @skipAuth
    renderGraphRoutes: [Route!] @skipAuth
  }
`
