import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const SlackPreviewer = ({ result }: ProviderPreviewerProps) => {
  const { ogTitle, ogDescription, ogUrl } = result

  return (
    <div className="border-l-4 border-gray-400 bg-white pl-4">
      <div className="py-2">
        <p className="text-md font-bold text-gray-800">{ogUrl}</p>
        <p className="text-md font-bold text-sky-500">{ogTitle}</p>
        <p className="text-md text-gray-800">{ogDescription}</p>
        <p className="text-xs text-gray-800">some date</p>
      </div>
    </div>
  )
}
