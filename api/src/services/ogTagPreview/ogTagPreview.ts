import ogs from 'open-graph-scraper'
import type { QueryResolvers } from 'types/graphql'

import { SyntaxError } from '@redwoodjs/graphql-server'

import { auditor } from 'src/lib/og/og'

export const ogTagPreview: QueryResolvers['ogTagPreview'] = async ({
  url,
  customUserAgent,
}) => {
  try {
    // Use an example of Google's user agent if none is provided
    customUserAgent ??=
      'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36'

    const html = await (
      await fetch(url, {
        headers: {
          'User-Agent': customUserAgent,
        },
      })
    ).text()

    const customResult = await ogs({
      html,
    })

    const { result, error } = customResult
    const audits = auditor(result, error)

    return {
      id: url,
      userAgent: customUserAgent,
      error,
      result,
      audits,
    }
  } catch {
    throw new SyntaxError(`Unable to preview ${url}`)
  }
}
