import ReactFlow, { Background, Controls, useNodesState, useEdgesState, MiniMap, addEdge } from 'reactflow'
import type { FindPrismaSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'
import { useCallback, useEffect } from 'react'

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

export const Success = ({
  prismaSchema,
}: CellSuccessProps<FindPrismaSchemaQuery>) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  useEffect(() => {
    const schemaDefinitions = Object.keys(prismaSchema?.schema?.definitions ?? {})
    const newNodePositions = []
    const newNodes = []
    for (let i = 0; i < schemaDefinitions.length; i++) {
      const x = (i % schemaDefinitions.length) * 175
      const y = (Math.floor(i / schemaDefinitions.length)) * 100
      newNodes.push({
        id: `Def-${schemaDefinitions[i]}`,
        data: { label: schemaDefinitions[i] },
        position: { x, y },
      })
      newNodePositions.push({x, y})
    }
    setNodes(newNodes)
  }, [prismaSchema])

  return (
    <div style={{ width: '100%', height: '640px', padding: '4px' }}>
      <ReactFlow nodes={nodes} fitView onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background />
        <Controls />
        <MiniMap style={{height: 120}} zoomable pannable />
      </ReactFlow>
    </div>
  )
}
