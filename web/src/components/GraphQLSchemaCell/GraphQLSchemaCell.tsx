import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import type { FindGraphQLSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'

import GraphQLSchemaDefinitionNode from './GraphQLSchemaDefinitionNode'

export const QUERY = gql`
  query FindGraphQLSchemaQuery {
    graphqlSchema {
      id
      ast
      definitions
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  graphqlSchema,
}: CellSuccessProps<FindGraphQLSchemaQuery>) => {
  const definitions = JSON.parse(graphqlSchema.definitions)

  const definitionTypes = Array.from(
    new Set(definitions.map((definition) => definition.kind))
  )

  const nodeTypes = {}

  definitionTypes.forEach((kind) => {
    nodeTypes[`${kind}Node`] = GraphQLSchemaDefinitionNode
  })

  const nodes = []

  let xOffSet = 0
  let yOffSet = 0

  for (let i = 0; i < definitions.length; i++) {
    const definition = definitions[i]
    const kind = definition.kind
    const node = {
      id: `Def-${kind}-${i}`,
      type: `${kind}Node`,
      data: {
        definition: definitions[i],
      },
      position: { x: xOffSet, y: yOffSet },
      deletable: false,
      draggable: false,
      resizable: false,
    }

    nodes.push(node)

    xOffSet += 300
    if (xOffSet > 300 * 3) {
      xOffSet = 0
      yOffSet += 128
    }
  }

  const edges = nodes.map((node, index, array) => {
    // fake connections for now
    // Get the index of the next node, or wrap around to the first node if it's the last node
    const nextIndex = (index + 1) % array.length

    return {
      id: `e-${node.id}`,
      source: node.id,
      target: array[nextIndex].id,
    }
  })

  return (
    <div className="mt-6 h-[720px] w-full">
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
  )
}
