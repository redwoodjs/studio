import dagre from 'dagre'
import ReactFlow, {
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow'
import type {
  FindRenderGraphQuery,
  FindRenderGraphQueryVariables,
} from 'types/graphql'

import 'reactflow/dist/style.css'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindRenderGraphQuery,
  FindRenderGraphQueryVariables
> = gql`
  query FindRenderGraphQuery($routeName: String!) {
    renderGraph: renderGraph(routeName: $routeName) {
      id
      initialEdges
      initialNodes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRenderGraphQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  renderGraph,
}: CellSuccessProps<FindRenderGraphQuery, FindRenderGraphQueryVariables>) => {
  const { initialNodes: n, initialEdges: e } = renderGraph

  // since we are mutating the nodes and edges, we need to make a deep copy
  // for the positioning to work correctly
  const initialNodes = JSON.parse(JSON.stringify(n))
  const initialEdges = JSON.parse(JSON.stringify(e))

  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))

  const nodeWidth = 172
  const nodeHeight = 36

  const getPositionedElements = (nodes, edges, direction = 'TB') => {
    const isHorizontal = direction === 'LR'
    dagreGraph.setGraph({ rankdir: direction })

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
    })

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id)
      node.targetPosition = isHorizontal ? 'left' : 'top'
      node.sourcePosition = isHorizontal ? 'right' : 'bottom'

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      }

      return node
    })

    return { nodes, edges }
  }

  const { nodes: positionedNodes, edges: positionedEdges } =
    getPositionedElements(initialNodes, initialEdges)

  const [nodes] = useNodesState(positionedNodes)
  const [edges] = useEdgesState(positionedEdges)

  return (
    <div className="h-screen w-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        ></ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
