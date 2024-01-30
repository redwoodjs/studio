import { useCallback } from 'react'

import Dagre from '@dagrejs/dagre'
import { Button, Flex } from '@tremor/react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Panel,
} from 'reactflow'
import type { PrismaSchema } from 'types/graphql'

import { HorizontalIcon, VerticalIcon } from 'src/icons/Icons'

import { extractNodesAndEdges } from './prismaHelpers'
import PrismaSchemaNode from './PrismaSchemaNode'

import 'reactflow/dist/style.css'

interface Props {
  prismaSchema?: PrismaSchema
}

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))

const getLayoutedElements = (nodes, edges, options) => {
  g.setGraph({ rankdir: options.direction })

  edges.forEach((edge) => g.setEdge(edge.source, edge.target))
  nodes.forEach((node) => g.setNode(node.id, node))

  Dagre.layout(g)

  return {
    nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id)

      return { ...node, position: { x, y } }
    }),
    edges,
  }
}

const LayoutFlow = ({ prismaSchema }: { prismaSchema: PrismaSchema }) => {
  const { fitView } = useReactFlow()

  const { nodes: initialNodes, edges: initialEdges } = extractNodesAndEdges(
    prismaSchema.schema
  )
  const nodeTypes = { PrismaModel: PrismaSchemaNode }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onLayout = useCallback(
    (direction) => {
      const layouted = getLayoutedElements(nodes, edges, { direction })

      setNodes([...layouted.nodes])
      setEdges([...layouted.edges])

      window.requestAnimationFrame(() => {
        fitView()
      })
    },
    [nodes, edges, fitView, setNodes, setEdges]
  )

  return (
    <div className="h-[640px] w-full min-w-[320px]">
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
        <Panel position="top-right" onLoad={() => onLayout('TB')}>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="evenly"
            className="space-x-4"
          >
            <Button icon={VerticalIcon} onClick={() => onLayout('TB')} />
            <Button icon={HorizontalIcon} onClick={() => onLayout('LR')} />
          </Flex>
        </Panel>

        <Background variant={BackgroundVariant.Dots} />
        <Controls className="bg-white" showInteractive={false} />
      </ReactFlow>
    </div>
  )
}

export const PrismaEntityRelationshipDiagram = ({ prismaSchema }: Props) => {
  return (
    <ReactFlowProvider>
      <LayoutFlow prismaSchema={prismaSchema} />
    </ReactFlowProvider>
  )
}
