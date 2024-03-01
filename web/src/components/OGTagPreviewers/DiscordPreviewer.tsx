import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const DiscordPreviewer = (props: ProviderPreviewerProps) => {
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
