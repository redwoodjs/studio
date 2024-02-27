import ogs from 'open-graph-scraper'
import type { QueryResolvers } from 'types/graphql'

import { auditor } from 'src/lib/og'

export const ogTagPreview: QueryResolvers['ogTagPreview'] = async ({
  url,
  customUserAgent,
}) => {
  // Use an example of Google's user agent if none is provided
  customUserAgent ??=
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36'

  console.log(url, 'fetching url')

  const html = await (
    await fetch(url, {
      headers: {
        'User-Agent': customUserAgent,
      },
    })
  ).text()

  console.log(html, 'fetched html')

  const customResult = await ogs({
    html,
  })

  const { result, error } = customResult

  console.log(result, error, 'auditing result')

  const audits = auditor(result, error)

  console.log(audits, 'audits')

  return {
    id: url,
    userAgent: customUserAgent,
    error,
    result,
    audits,
  }
}
