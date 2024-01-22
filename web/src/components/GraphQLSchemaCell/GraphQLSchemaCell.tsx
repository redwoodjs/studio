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

function hashCode(str) {
  return str
    .split('')
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    )
}

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
  const edges = []

  let xOffSet = 0
  let yOffSet = 0

  for (let i = 0; i < definitions.length; i++) {
    const definition = definitions[i]

    console.log(definition)

    const kind = definition.kind
    const name = definition.name?.value || 'unknown-name'
    const hash = hashCode(`${kind}-${name}`)
    const id = `Def-${kind}-${hash}`

    console.log(id, hash)

    const node = {
      id: id,
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

  for (let i = 0; i < definitions.length; i++) {
    const definition = definitions[i]
    const kind = definition.kind
    const hash = hashCode(JSON.stringify(definition))
    const id = `Def-${kind}-${hash}`

    definition.fields?.forEach((field) => {
      console.log(field)
      const fieldKind = field?.kind || 'unknown-field-type'
      const fieldName = field?.name?.value || 'unknown-field-name'
      const fieldHash = hashCode(`${fieldKind}-${fieldName}`)
      const fieldId = `Def-${fieldKind}-${fieldHash}`

      edges.push({
        id: `e-${id}`,
        source: id,
        target: fieldId,
      })
    })
  }

  console.log(nodes, edges)

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
