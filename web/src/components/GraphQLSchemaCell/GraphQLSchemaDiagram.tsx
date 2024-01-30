import { useCallback } from 'react'

import Dagre from '@dagrejs/dagre'
import { Button, Flex } from '@tremor/react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  NodeTypes,
  // applyNodeChanges,
  // applyEdgeChanges,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Panel,
} from 'reactflow'
import type { GraphQLSchema, Relationship } from 'types/graphql'

import { HorizontalIcon, VerticalIcon } from 'src/icons/Icons'

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
      }

      nodes.push(node)

      xOffSet += 300
      if (xOffSet > 300 * 3) {
        xOffSet = 0
        yOffSet += 128
      }

      yOffSet += i % 2 === 0 ? 32 : -32
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

const LayoutFlow = ({ schema }: { schema: GraphQLSchema }) => {
  const { fitView } = useReactFlow()

  const definitions = JSON.parse(schema.definitions)

  const nodeTypes = getNodeTypes(definitions)
  const initialNodes = getNodes(definitions)
  const initialEdges = getEdges(schema.relationships)

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
        className="bg-teal-50"
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

export const GraphQLSchemaDiagram = ({ schema }: { schema: GraphQLSchema }) => {
  return (
    <ReactFlowProvider>
      <LayoutFlow schema={schema} />
    </ReactFlowProvider>
  )
}
