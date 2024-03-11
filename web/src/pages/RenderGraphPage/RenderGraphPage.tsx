import React, { useCallback, useState } from 'react'

import dagre from 'dagre'
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
  // useReactFlow,
  ReactFlowProvider,
  // getIncomers,
} from 'reactflow'

import { initialNodes, initialEdges } from './nodes-edges.js'

import 'reactflow/dist/style.css'

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 172
const nodeHeight = 36

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
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

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
)

function _findAllAncestors(nodes, edges, targetNodeId) {
  const ancestors = []

  // A recursive function to find all ancestors of a given node
  function findAncestors(nodeId) {
    // Find edges where the target is the current node
    const incomingEdges = edges.filter((edge) => edge.target === nodeId)

    for (const edge of incomingEdges) {
      // Avoid adding duplicate ancestors
      if (!ancestors.includes(edge.source)) {
        ancestors.push(edge.source)
        // Recursively find ancestors of the current ancestor
        findAncestors(edge.source)
      }
    }
  }

  // Start the search with the target node
  findAncestors(targetNodeId)

  // Map ancestor IDs to node objects (optional, depending on your needs)
  const ancestorNodes = ancestors.map((ancestorId) =>
    nodes.find(
      (node) => node.id === ancestorId // && node.data.componentType === "Route"
    )
  )

  return ancestorNodes
}

function _findAllDescendants(nodes, edges, targetNodeId) {
  const descendants = []

  // A recursive function to find all descendants of a given node
  function findDescendants(nodeId) {
    // Find edges where the source is the current node

    const outgoingEdges = edges.filter((edge) => edge.source === nodeId)

    for (const edge of outgoingEdges) {
      // Avoid adding duplicate descendants
      if (!descendants.includes(edge.target)) {
        descendants.push(edge.target)
        // Recursively find descendants of the current descendant
        findDescendants(edge.target)
      }
    }
  }

  // Start the search with the target node
  findDescendants(targetNodeId)

  // Map descendant IDs to node objects (optional, depending on your needs)
  const descendantNodes = descendants.map((descendantId) =>
    nodes.find(
      (node) => node.id === descendantId // && node.data.componentType === "Route"
    )
  )

  return descendantNodes
}

const RenderGraphPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges)

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  )
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction)

      setNodes([...layoutedNodes])
      setEdges([...layoutedEdges])
    },
    [nodes, edges]
  )

  return (
    <div style={{ height: 1200, width: 1200 }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        >
          <Panel position="top-right">
            <button onClick={() => onLayout('TB')}>vertical layout</button>
            <button onClick={() => onLayout('LR')}>horizontal layout</button>
          </Panel>
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}

export default RenderGraphPage
