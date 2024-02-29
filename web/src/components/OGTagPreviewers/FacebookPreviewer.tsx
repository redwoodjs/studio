import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const FacebookPreviewer = (props: ProviderPreviewerProps) => {
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

  const { ogTitle, ogImage, ogUrl, ogDescription } = props.result
  return (
    <div className="cursor:pointer relative isolate w-[524px] overflow-hidden bg-slate-50">
      <div className="h-60 w-full">
        <img
          src={ogImage[0].url}
          alt={ogTitle}
          className="absolute inset-0 -z-10 h-60 w-full bg-center object-cover"
        />
      </div>
      <div className="h-20 w-full border-b border-l border-r border-slate-300 bg-slate-50 px-4 py-2">
        <div className="text-sm uppercase text-gray-600">{ogUrl}</div>
        <div className="text-md truncate font-bold text-black">{ogTitle}</div>
        <div className="truncate text-sm text-gray-600">{ogDescription}</div>
      </div>
    </div>
  )
}
