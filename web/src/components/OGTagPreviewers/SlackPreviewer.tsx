import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const SlackPreviewer = (props: ProviderPreviewerProps) => {
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

  const { ogTitle, ogDescription, ogUrl } = props.result
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
