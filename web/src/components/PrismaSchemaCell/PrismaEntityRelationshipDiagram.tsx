import { useCallback, useState } from 'react'

import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'
import type { PrismaSchema } from 'types/graphql'

import { extractNodesAndEdges } from './prismaHelpers'
import PrismaSchemaNode from './PrismaSchemaNode'

import 'reactflow/dist/style.css'

interface Props {
  prismaSchema?: PrismaSchema
}

const PrismaEntityRelationshipDiagram = ({ prismaSchema }: Props) => {
  const { nodes: initialNodes, edges: initialEdges } = extractNodesAndEdges(
    prismaSchema.schema
  )
  const nodeTypes = { PrismaModel: PrismaSchemaNode }

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  return (
    <div className="h-[640px] w-full">
      <ReactFlow
        className="bg-zinc-50"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={true}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls className="bg-white" showInteractive={false} />
      </ReactFlow>
    </div>
  )
}

export default PrismaEntityRelationshipDiagram
