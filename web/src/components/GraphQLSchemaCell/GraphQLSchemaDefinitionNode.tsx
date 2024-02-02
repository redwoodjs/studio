import React, { memo } from 'react'

import { Handle, Position } from 'reactflow'

const getNodeCharacteristics = (definition) => {
  const name = definition.name.value || 'Unknown'
  const kind = definition.kind
  const color = getNodeColorForKind(kind, name)
  const emoji = getNodeEmojiForKind(kind, name)
  const numFields = definition.fields ? definition.fields.length : 0

  return { name, kind, color, emoji, numFields }
}

const getNodeColorForKind = (kind: string, name: string): string => {
  switch (kind) {
    case 'DirectiveDefinition':
      if (name === 'skipAuth' || name === 'requireAuth') {
        return 'red'
      }
      return 'fuchsia'

    case 'EnumTypeDefinition':
      return 'yellow'

    case 'InputObjectTypeDefinition':
      return 'green'

    case 'InterfaceTypeDefinition':
      return 'blue'

    case 'ObjectTypeDefinition':
      if (name === 'Query') {
        return 'teal'
      }
      if (name === 'Mutation') {
        return 'cyan'
      }
      return 'indigo'

    case 'ScalarTypeDefinition':
      return 'purple'

    case 'UnionTypeDefinition':
      return 'pink'

    case 'SchemaDefinition':
      return 'cyan'

    case 'OperationDefinition':
      return 'orange'

    case 'FragmentDefinition':
      return 'brown'

    case 'FieldDefinition':
      return 'teal'

    case 'EnumValueDefinition':
      return 'lime'

    case 'InputValueDefinition':
      return 'amber'

    case 'VariableDefinition':
      return 'pink'

    default:
      return 'gray'
  }
}

const getNodeEmojiForKind = (kind: string, name: string): string => {
  switch (kind) {
    case 'DirectiveDefinition':
      if (name === 'skipAuth' || name === 'requireAuth') {
        return '🔒'
      }

      return '🛑'

    case 'EnumTypeDefinition':
      return '🔠'

    case 'InputObjectTypeDefinition':
      return '📥'

    case 'InterfaceTypeDefinition':
      return '🔄'

    case 'ObjectTypeDefinition':
      if (name === 'Query') {
        return '🔍'
      }

      if (name === 'Mutation') {
        return '🧬'
      }

      return '📦'

    case 'ScalarTypeDefinition':
      return '📊'

    case 'UnionTypeDefinition':
      return '🔗'

    case 'SchemaDefinition':
      return '📜'

    case 'OperationDefinition':
      return '🩺'

    case 'FragmentDefinition':
      return '🧩'

    case 'FieldDefinition':
      return '🔗'

    case 'EnumValueDefinition':
      return '🆚'

    case 'InputValueDefinition':
      return '🔢'

    case 'VariableDefinition':
      return '🔄'

    default:
      return '🔘'
  }
}

const GraphQLSchemaDefinitionNode = ({ data }) => {
  const { name, color, emoji, numFields } = getNodeCharacteristics(
    data.definition
  )

  const textColor = `text-${color}-500`
  const borderColor = `border-${color}-700`
  const bgColor = `bg-${color}-100`

  return (
    <div
      className={`${borderColor} min-w-32 max-w-64 max-h-32 rounded-md border-2 border-r-2 border-stone-400 bg-white px-4 py-2 shadow-md`}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div className="flex items-center">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor}`}
        >
          {emoji}
        </div>
        <div className="ml-2">
          <div className={`text-lg font-bold ${textColor}`}>{name}</div>
          <div className={`text-sm ${textColor}`}>{numFields} fields</div>
        </div>
      </div>
    </div>
  )
}

export default memo(GraphQLSchemaDefinitionNode)
