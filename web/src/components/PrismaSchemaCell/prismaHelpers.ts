const parseProperties = (properties) => {
  const fields = {}

  if (properties) {
    for (const propertyName in properties) {
      const property = properties[propertyName]
      const field = { type: property.type, relationship: null }

      if (property.$ref) {
        field.type = 'object'
        field.relationship = `Model-${property.$ref.split('/').pop()}`
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
