import ReactFlow, { Background, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow'
import type { FindGraphQLSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'
import { useCallback, useEffect } from 'react'

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
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  useEffect(() => {
    const definitions = JSON.parse(graphqlSchema.definitions)

    const definitionTypes = Array.from(
      new Set(definitions.map((definition) => definition.kind))
    )
    const definitionOccurrences = new Map()
    for (let i = 0; i < definitions.length; i++) {
      const kind = definitions[i].kind
      if (!definitionOccurrences.has(kind)) {
        definitionOccurrences.set(kind, 0)
      }
    }

    const newNodes = []
    for (let i = 0; i < definitions.length; i++) {
      const yOffSet = definitionTypes.indexOf(definitions[i].kind) * 75
      const xOffSet = definitionOccurrences.get(definitions[i].kind) * 220
      definitionOccurrences.set(
        definitions[i].kind,
        definitionOccurrences.get(definitions[i].kind) + 1
      )
      newNodes.push({
        id: `Def-${definitions[i].name.value}`,
        data: { label: `${definitions[i].name.value} (${definitions[i].kind})` },
        position: { x: xOffSet, y: yOffSet },
      })
    }
    setNodes(newNodes)
  }, [graphqlSchema])



  return (
    <div style={{ width: '100%', height: '640px', padding: '4px' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background />
        <Controls />
        <MiniMap style={{height: 120}} zoomable pannable />
      </ReactFlow>
    </div>
  )
}
