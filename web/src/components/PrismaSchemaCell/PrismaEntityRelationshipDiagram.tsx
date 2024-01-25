import { Title } from '@tremor/react'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import type {
  PrismaSchema,
  //Relationship
} from 'types/graphql'

import PrismaSchemaNode from './PrismaSchemaNode'

import 'reactflow/dist/style.css'

function parseProperties(properties) {
  const fields = {}

  if (properties) {
    for (const propertyName in properties) {
      const property = properties[propertyName]
      const field = { type: property.type, relationship: null }

      if (property.$ref) {
        field.type = 'object'
        field.relationship = `Model-${property.$ref.split('/').pop()}`
      }

      fields[propertyName] = field
    }
  }

  return fields
}

const extractNodesAndEdges = (jsonSchema) => {
  const definitions = jsonSchema?.definitions ?? {}
  const objectNodeKeys = [] //Object.keys(jsonSchema?.definitions ?? {})
  const nodes = []
  const edges = []

  let index = 0

  if (definitions) {
    for (const definitionName in definitions) {
      const definition = definitions[definitionName]
      const id = `Model-${definitionName}`
      const model = {
        id,
        type: 'PrismaModel',
        data: {
          name: definitionName,
          type: definition.type || 'object',
          fields: parseProperties(definition.properties),
          fieldCount: Object.keys(definition.properties || {}).length,
        },
        position: { x: 0, y: index * 128 },
      }
      objectNodeKeys.push(definitionName)
      nodes.push(model)
      index++
    }
  }

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
            source: `Model-${node}`,
            target: `Model-${target}`,
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
      <Title className="mb-4">Prisma Schema</Title>
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
    </>
  )
}
