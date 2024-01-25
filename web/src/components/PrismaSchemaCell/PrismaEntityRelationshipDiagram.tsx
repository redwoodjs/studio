import { Title } from '@tremor/react'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import type {
  PrismaSchema,
  //Relationship
} from 'types/graphql'

import PrismaSchemaNode from './PrismaSchemaNode'

import 'reactflow/dist/style.css'

const extractNodesAndEdges = (jsonSchema) => {
  const objectNodeKeys = Object.keys(jsonSchema?.definitions ?? {})
  const edges = []

  const nodes = objectNodeKeys.map((node, index) => ({
    id: `Def-${node}`,
    type: 'PrismaModel',
    data: { label: node },
    position: { x: 0, y: index * 128 },
  }))

  objectNodeKeys.forEach((node) => {
    const nodeSchema = jsonSchema.definitions[node]
    const properties = nodeSchema.properties

    Object.keys(properties).forEach((property) => {
      const propertySchema = properties[property]
      if (propertySchema.$ref) {
        const target = propertySchema.$ref.split('/').pop()
        if (target) {
          edges.push({
            id: `e-${node}-${property}`,
            source: `Def-${node}`,
            target: `Def-${target}`,
            label: property,
            animated: true,
          })
        }
      }
    })
  })
  return { nodes, edges }
}

export const PrismaEntityRelationshipDiagram = ({
  prismaSchema,
}: {
  prismaSchema: PrismaSchema
}) => {
  const { nodes, edges } = extractNodesAndEdges(prismaSchema.schema)
  const nodeTypes = { PrismaModel: PrismaSchemaNode }

  return (
    <>
      <Title className="mb-4">Diagram</Title>
      <div className="h-[640px] w-full py-2">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          className="bg-teal-50"
        >
          <Background variant={BackgroundVariant.Dots} />
          <Controls className="bg-white" showInteractive={false} />
        </ReactFlow>
      </div>
    </>
  )
}
