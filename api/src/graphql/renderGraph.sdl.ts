export const schema = gql`
  type RenderGraph {
    id: ID!
    initialNodes: JSON
    initialEdges: JSON
  }
  type Query {
    renderGraph(routeName: String!): RenderGraph!
  }
`
