import type { Node, Edge } from 'reactflow'
import type { PrismaSchema } from 'types/graphql'

interface Property {
  type: string | string[]
  $ref?: string
  format: string
}

interface Field {
  type: string
  format: string | null
  relationship: string | null
  relatedModel: string | null
}

interface NodeData {
  name: string
  type: string
  fields: Record<string, Field>
  fieldCount: number
}

const parseProperties = (properties: Record<string, Property>) => {
  const fields: Record<string, Field> = {}

  if (properties) {
    for (const propertyName in properties) {
      const property = properties[propertyName]
      const type = Array.isArray(property.type)
        ? property.type.join(', ')
        : property.type
      const format = property.format
      const field: Field = {
        type,
        format,
        relationship: null,
        relatedModel: null,
      }

      if (property.$ref) {
        const relatedModel = property.$ref.split('/').pop()

        field.type = 'object'
        field.relatedModel = relatedModel
        // edge for connecting nodes in diagram
        field.relationship = `Model-${relatedModel}`
      }

      fields[propertyName] = field
    }
  }

  return fields
}

export const extractNodesAndEdges = (jsonSchema?: PrismaSchema['schema']) => {
  const definitions = jsonSchema?.definitions ?? {}
  const objectNodeKeys: Array<string> = []
  const nodes: Array<Node<NodeData>> = []
  const edges: Array<Edge> = []

  let index = 0

  if (definitions) {
    for (const definitionName in definitions) {
      const definition = definitions[definitionName]
      const id = `Model-${definitionName}`
      const model: Node<NodeData> = {
        id,
        type: 'PrismaModel',
        data: {
          name: definitionName,
          type: definition.type || 'object',
          fields: parseProperties(definition.properties),
          fieldCount: Object.keys(definition.properties || {}).length,
        },
        position: { x: 0, y: index * 128 },
        deletable: false,
        draggable: true,
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

export interface TableRow {
  name: string
  fields: Array<Field & { name: string }>
}

export const getTableDataForSchema = (schema: PrismaSchema['schema']) => {
  const tableData: Array<TableRow> = []

  const { nodes } = extractNodesAndEdges(schema)

  nodes.forEach((node) => {
    const { name, fields } = node.data
    const row: TableRow = { name, fields: [] }

    Object.keys(fields).forEach((fieldName) => {
      row.fields.push({ name: fieldName, ...fields[fieldName] })
    })

    tableData.push(row)
  })

  return tableData
}
