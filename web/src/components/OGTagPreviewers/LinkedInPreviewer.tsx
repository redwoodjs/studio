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

  const { twitterTitle, twitterImage, ogUrl } = props.result
  return (
    <div className="cursor:pointer border-1 relative isolate h-44 w-96 overflow-hidden rounded-lg border-gray-100 bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img
        src={twitterImage[0].url}
        alt={twitterTitle}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="border-1 absolute bottom-1 left-1 rounded-md border-black bg-black p-1 text-xs text-white">
        {ogUrl}
      </div>
    </div>
  )
}
