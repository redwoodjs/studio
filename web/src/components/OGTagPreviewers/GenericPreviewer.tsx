import React from 'react'

import { parseISO, format } from 'date-fns'

import type { ProviderPreviewerProps } from './Previewer'

export const GenericPreviewer = ({ result }: ProviderPreviewerProps) => {
  const {
    ogTitle,
    ogUrl,
    ogImage,
    ogDescription,
    articleAuthor,
    articlePublishedDate,
    articlePublishedTime,
  } = result
  return (
    <div className="cursor:pointer h-full w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 p-4 shadow-lg">
      {ogImage && ogImage[0] && (
        <div className="h-60 w-full">
          <img
            src={ogImage[0].url}
            alt={ogTitle}
            className="h-full w-full rounded-lg border-2 border-white bg-center object-contain"
          />
        </div>
      )}
      <div className="h-full w-full space-y-2 border-gray-500 bg-white p-4">
        <p className="truncate text-lg font-bold text-tremor-brand">
          {ogTitle}
        </p>
        <p className="text-md truncate text-slate-800">{ogDescription}</p>
        <p className="text-xs uppercase text-slate-600">{ogUrl}</p>
        {articlePublishedDate && (
          <p className="text-xs uppercase text-slate-600">
            {format(parseISO(articlePublishedDate), 'MMM dd, yyyy')}
          </p>
        )}
        {articlePublishedTime && (
          <p className="text-xs uppercase text-slate-600">
            {format(parseISO(articlePublishedTime), 'HH:mm:ss')}
          </p>
        )}

        {articleAuthor && (
          <p className="text-xs uppercase text-slate-600">{articleAuthor}</p>
        )}
      </div>
    </div>
  )
}
