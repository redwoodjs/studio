const parseProperties = (properties) => {
  const fields = {}

  if (properties) {
    for (const propertyName in properties) {
      const property = properties[propertyName]
      const type =
        property.type instanceof Array
          ? property.type.join(', ')
          : property.type
      const format = property.format
      const field = {
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

export const extractNodesAndEdges = (jsonSchema) => {
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

export const getTableDataForSchema = (schema) => {
  const tableData = []

  const { nodes } = extractNodesAndEdges(schema)

  nodes.forEach((node) => {
    const { name, fields } = node.data
    const row = { name, fields: [] }

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName]
      const { type, format, relationship, relatedModel } = field
      row.fields.push({
        name: fieldName,
        type,
        relationship,
        relatedModel,
        format,
      })
    })

    tableData.push(row)
  })

  return tableData
}
