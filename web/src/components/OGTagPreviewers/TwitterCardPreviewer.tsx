import React from 'react'

import type { ProviderPreviewerProps } from './Previewer'

export const TwitterCardPreviewer = (props: ProviderPreviewerProps) => {
  const {
    twitterTitle,
    twitterImage,
    twitterUrl,
    ogUrl,
    ogSiteName,
    twitterSite,
  } = props.result
  return (
    <div className="cursor:pointer border-1 relative isolate h-44 w-96 overflow-hidden rounded-lg border-gray-100 bg-gray-900 px-6 py-24">
      <img
        src={twitterImage[0]?.url}
        alt={twitterTitle}
        className="absolute inset-0 -z-10 h-full w-full bg-left object-cover"
      />
      <div className="border-1 absolute bottom-1 left-1 rounded-md border-black bg-black p-1 text-xs text-white">
        {twitterSite || ogSiteName || twitterUrl || ogUrl}
      </div>
    </div>
  )
}
