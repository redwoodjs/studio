import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const LinkedInPreviewer = (props: ProviderPreviewerProps) => {
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

  const { ogTitle, ogUrl, ogImage } = props.result
  return (
    <div className="cursor:pointer border-1 relative isolate h-[300px] w-[520px] overflow-hidden rounded-none border-gray-500 bg-white shadow-lg">
      <div className="h-60 w-full">
        <img
          src={ogImage[0].url}
          alt={ogTitle}
          className="absolute inset-0 -z-10 h-60 w-full bg-center object-cover"
        />
      </div>
      <div className="h-16 w-full rounded-none border-b border-l border-r border-gray-300 bg-white px-4 py-2">
        <div className="text-md truncate font-bold text-stone-900">
          {ogTitle}
        </div>
        <div className="text-sm uppercase text-[#0009]">{ogUrl}</div>
      </div>
    </div>
  )
}
