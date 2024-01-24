import ReactFlow, { Background, Controls } from 'reactflow'
import type { FindPrismaSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'

export const QUERY = gql`
  query FindPrismaSchemaQuery {
    prismaSchema {
      id
      schema
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

function extractNodesAndEdges(jsonSchema) {
  const objectNodeKeys = Object.keys(jsonSchema?.definitions ?? {})
  const edges = []

  const nodes = objectNodeKeys.map((node, index) => ({
    id: `Def-${node}`,
    type: 'default',
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
            id: `${node}-${property}`,
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

export const Success = ({
  prismaSchema,
}: CellSuccessProps<FindPrismaSchemaQuery>) => {
  const { nodes, edges } = extractNodesAndEdges(prismaSchema.schema)

  return (
    <>
      <div className="h-[640px] w-full p-4">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
