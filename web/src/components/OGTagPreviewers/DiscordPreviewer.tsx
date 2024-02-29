import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const DiscordPreviewer = (props: ProviderPreviewerProps) => {
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

  const { ogTitle, ogDescription, ogImage } = props.result
  return (
    <div className="cursor:pointer h-[330px] w-[440px] overflow-hidden rounded-sm border-gray-500 bg-zinc-800 p-4 shadow-lg">
      <div className="h-20 w-full space-y-2 py-2">
        <p className="truncate text-lg font-bold text-sky-500">{ogTitle}</p>
        <p className="text-sm text-white">{ogDescription}</p>
      </div>
      <div className="mb-2 mt-4 h-full w-full">
        <img
          src={ogImage[0].url}
          alt={ogTitle}
          className=" h-[200px] w-[410px] bg-center object-cover"
        />
      </div>
    </div>
  )
}
