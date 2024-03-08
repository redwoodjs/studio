import React from 'react'

import { parseISO, format } from 'date-fns'

import type { ProviderPreviewerProps } from './Previewer'
import { extractDomain } from './Previewer'

export const SlackPreviewer = ({ result }: ProviderPreviewerProps) => {
  const { ogTitle, ogDescription, ogUrl, ogImage, articlePublishedDate } =
    result

  return (
    <div className="border-l-4 border-gray-400 bg-white pl-4">
      <div className="py-2">
        {ogImage && ogImage[0] && (
          <div className="h-60 w-full">
            <img
              src={ogImage[0].url}
              alt={ogTitle}
              className="h-full w-full rounded-lg border-2 border-white bg-center object-contain"
            />
          </div>
        )}

        <p className="text-md font-bold text-gray-800">
          {extractDomain(ogUrl)}
        </p>
        <p className="text-md font-bold text-sky-500">{ogTitle}</p>
        <p className="text-md text-gray-800">{ogDescription}</p>
        {articlePublishedDate && (
          <p className="text-xs text-gray-800">
            {format(parseISO(articlePublishedDate), 'MMM d')}
          </p>
        )}
      </div>
    </div>
  )
}
