import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const GenericPreviewer = (props: ProviderPreviewerProps) => {
  const data = {
    ogTitle: 'RedwoodJS: The App Framework for Startups',
    twitterTitle: 'RedwoodJS: The App Framework for Startups',
    twitterDescription:
      'Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework.',
    ogDescription:
      'Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework.',
    ogUrl: 'https://redwoodjs.com',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    ogImage: [
      {
        url: 'https://redwoodjs.com/images/rw-og.png',
        type: 'png',
      },
    ],
    twitterImage: [
      {
        url: 'https://redwoodjs.com/images/rw-og.png',
      },
    ],
    ogLocale: 'en',
    favicon: '/favicon.png',
    charset: 'UTF-8',
    success: true,
    // error: false,
    // id: '1',
    // userAgent:
    //   'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
  }

  props.result = data

  const { ogTitle, ogUrl, ogImage, ogDescription } = props.result
  return (
    <div className="cursor:pointer h-full w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 p-4 shadow-lg">
      <div className="h-60 w-full">
        <img
          src={ogImage[0].url}
          alt={ogTitle}
          className="h-full w-full rounded-lg border-2 border-white bg-center object-contain"
        />
      </div>
      <div className="h-full w-full space-y-2 border-gray-500 bg-white p-4">
        <p className="truncate text-lg font-bold text-tremor-brand">
          {ogTitle}
        </p>
        <p className="text-md text-slate-800">{ogDescription}</p>
        <p className="text-xs uppercase text-slate-600">{ogUrl}</p>
        <p className="text-xs uppercase text-slate-600">date</p>
        <p className="text-xs uppercase text-slate-600">author</p>
      </div>
    </div>
  )
}
