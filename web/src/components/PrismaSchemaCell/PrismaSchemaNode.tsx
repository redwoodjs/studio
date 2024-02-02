import React, { memo } from 'react'

import { Handle, Position } from 'reactflow'

const PrismaSchemaNode = ({ data }) => {
  const { name, color, emoji } = {
    name: data.name,
    color: 'zinc',
    emoji: '📦',
  }

  const textColor = `text-${color}-600`
  const borderColor = `border-${color}-700`
  const bgColor = `bg-${color}-200`
  const captionColor = `text-${color}-400`

  return (
    <div
      className={`${borderColor} max-w-64 max-h-32 rounded-md border-2 border-r-2 ${borderColor} bg-white px-4 py-2 shadow-md`}
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
          <div className={`text-sm ${captionColor}`}>
            {data.fieldCount} fields
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(PrismaSchemaNode)
