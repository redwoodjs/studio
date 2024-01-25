import { Card, Title } from '@tremor/react'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import type {
  PrismaSchema,
  //Relationship
} from 'types/graphql'

import { extractNodesAndEdges } from './prismaHelpers'
import PrismaSchemaNode from './PrismaSchemaNode'

import 'reactflow/dist/style.css'

const PrismaEntityRelationshipDiagram = ({
  prismaSchema,
}: {
  prismaSchema: PrismaSchema
}) => {
  const { nodes, edges } = extractNodesAndEdges(prismaSchema.schema)
  const nodeTypes = { PrismaModel: PrismaSchemaNode }

  return (
    <Card>
      <Title className="mb-4">ERD</Title>
      <div className="h-[640px] w-full py-2">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          className="bg-zinc-50"
        >
          <Background variant={BackgroundVariant.Dots} />
          <Controls className="bg-white" showInteractive={false} />
        </ReactFlow>
      </div>
    </Card>
  )
}

export default PrismaEntityRelationshipDiagram
