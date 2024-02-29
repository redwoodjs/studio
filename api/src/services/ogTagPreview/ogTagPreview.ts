import openGraphScraper from 'open-graph-scraper'
import type { QueryResolvers } from 'types/graphql'


import { SyntaxError } from '@redwoodjs/graphql-server'
import { auditor } from 'src/lib/og/og'
import { getUserProjectConfig } from 'src/util/project'

export const ogTagPreview: QueryResolvers['ogTagPreview'] = async ({
  url,
  customUserAgent,
}) => {
  const config = await getUserProjectConfig()

    // short-cut in the case that SSR is disabled
  if (!config.experimental?.streamingSsr?.enabled) {
    return {
      id: url,
      userAgent: customUserAgent,
      error: true,
      result: {
        message: 'No OG Tag Preview possible because SSR is disabled.',
      },
      audtis: [],
    }
  }

  // Use an example of Google's user agent if none is provided
  customUserAgent ??=
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36'

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': customUserAgent,
      },
    })

    const html = await response.text()
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
    throw new SyntaxError(
      `Unable to preview ${url} with user agent ${customUserAgent}`
    )
  }
}
