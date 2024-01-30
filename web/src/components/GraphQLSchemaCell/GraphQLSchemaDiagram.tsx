import { Title } from '@tremor/react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  NodeTypes,
} from 'reactflow'
import type { GraphQLSchema, Relationship } from 'types/graphql'

import GraphQLSchemaDefinitionNode from './GraphQLSchemaDefinitionNode'

import 'reactflow/dist/style.css'

interface Definition {
  kind: string
  name: {
    value: string
  }
  fields: Array<{
    name: {
      value: string
    }
    type: {
      kind: string
      name: {
        value: string
      }
    }
  }>
}

function getNodeTypes(definitions: Array<Definition>) {
  const nodeTypes: NodeTypes = {}

  const definitionTypes = Array.from(
    new Set(definitions.map((definition) => definition.kind))
  )

  definitionTypes.forEach((kind) => {
    nodeTypes[`${kind}Node`] = GraphQLSchemaDefinitionNode
  })

  return nodeTypes
}

function getNodes(definitions: Array<Definition>) {
  const nodes: Array<Node> = []
  let xOffSet = 0
  let yOffSet = 0

  for (let i = 0; i < definitions.length; i++) {
    const definition = definitions[i]

    const kind = definition.kind
    const name = definition.name?.value || 'unknown-name'
    const id = name

    if (kind === 'ObjectTypeDefinition' && name !== 'Redwood') {
      const node = {
        id: id,
        type: `${kind}Node`,
        data: {
          definition: definitions[i],
        },
        position: { x: xOffSet, y: yOffSet },
        deletable: false,
        draggable: true,
        resizable: true,
      }

      nodes.push(node)

      xOffSet += 300
      if (xOffSet > 300 * 3) {
        xOffSet = 0
        yOffSet += 128
      }
    }
  }

  return nodes
}

function getEdges(relationships: Relationship[]) {
  const edges: Array<Edge> = []

  relationships?.forEach((relationship) => {
    edges.push({
      id: `e-${relationship.source}-${relationship.target}`,
      source: relationship.source,
      target: relationship.target,
      label: relationship.label || 'connect',
      animated: true,
    })
  })
  return edges
}

export const GraphQLSchemaDiagram = ({ schema }: { schema: GraphQLSchema }) => {
  const definitions = JSON.parse(schema.definitions)

  const nodeTypes = getNodeTypes(definitions)
  const nodes = getNodes(definitions)
  const edges = getEdges(schema.relationships)

  return (
    <>
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
    </>
  )
}
