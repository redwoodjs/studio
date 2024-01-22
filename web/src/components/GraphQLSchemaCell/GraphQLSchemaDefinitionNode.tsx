import React, { memo } from 'react'

import { Handle, Position } from 'reactflow'

const getNodeCharacteristics = (definition) => {
  const name = definition.name.value || 'Unknown'
  const kind = definition.kind
  const color = getNodeColorForKind(kind)
  const emoji = getNodeEmojiForKind(kind)

  return { name, kind, color, emoji }
}

const getNodeColorForKind = (kind: string): string => {
  switch (kind) {
    case 'DirectiveDefinition':
      return 'red'

    case 'EnumTypeDefinition':
      return 'yellow'

    case 'InputObjectTypeDefinition':
      return 'green'

    case 'InterfaceTypeDefinition':
      return 'blue'

    case 'ObjectTypeDefinition':
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

const getNodeEmojiForKind = (kind: string): string => {
  switch (kind) {
    case 'DirectiveDefinition':
      return '🛑'

    case 'EnumTypeDefinition':
      return '🔠'

    case 'InputObjectTypeDefinition':
      return '📥'

    case 'InterfaceTypeDefinition':
      return '🔄'

    case 'ObjectTypeDefinition':
      return '🔍'

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
  const { name, kind, color, emoji } = getNodeCharacteristics(data.definition)

  const textColor = `text-${color}-500`
  const borderColor = `border-${color}-700`
  const bgColor = `bg-${color}-100`

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div
        className={`${borderColor} max-w-64 max-h-32 border-2 border-r-2 border-stone-400 bg-white px-4 py-2 shadow-md`}
      >
        <div className="flex">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor}`}
          >
            {emoji}
          </div>
          <div className="ml-2">
            <div className={`text-lg font-bold ${textColor}`}>{name}</div>
            <div className={`${textColor}`}>{kind}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(GraphQLSchemaDefinitionNode)
