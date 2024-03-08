import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'
import { extractDomain } from './Previewer'

export const FacebookPreviewer = ({ result }: ProviderPreviewerProps) => {
  const { ogTitle, ogImage, ogUrl, ogDescription } = result
  return (
    <div className="cursor:pointer relative isolate w-[524px] overflow-hidden bg-slate-50">
      {ogImage && ogImage[0] && (
        <div className="h-60 w-full">
          <img
            src={ogImage[0].url}
            alt={ogTitle}
            className="absolute inset-0 -z-10 h-60 w-full bg-center object-cover"
          />
        </div>
      )}
      <div className="h-20 w-full border-b border-l border-r border-slate-300 bg-slate-50 px-4 py-2">
        <div className="text-sm uppercase text-gray-600">
          {extractDomain(ogUrl)}
        </div>
        <div className="text-md truncate font-bold text-black">{ogTitle}</div>
        <div className="truncate text-sm text-gray-600">{ogDescription}</div>
      </div>
    </div>
  )
}
