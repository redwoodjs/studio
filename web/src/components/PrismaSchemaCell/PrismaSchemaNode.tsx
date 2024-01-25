import React, { memo } from 'react'

import { Handle, Position } from 'reactflow'

const PrismaSchemaNode = ({ data }) => {
  console.log(data)
  const { name, color, emoji } = {
    name: data.label,
    color: 'indigo',
    emoji: '📦',
  }

  const textColor = `text-${color}-500`
  const borderColor = `border-${color}-700`
  const bgColor = `bg-${color}-100`

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div
        className={`${borderColor} max-w-64 max-h-32 rounded-md border-2 border-r-2 border-stone-400 bg-white px-4 py-2 shadow-md`}
      >
        <div className="flex items-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor}`}
          >
            {emoji}
          </div>
          <div className="ml-2">
            <div className={`text-lg font-bold ${textColor}`}>{name}</div>
            <div className={`text-md${textColor}`}># fields</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(PrismaSchemaNode)
