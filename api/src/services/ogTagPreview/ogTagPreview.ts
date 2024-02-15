import ogs from 'open-graph-scraper'
import type { QueryResolvers } from 'types/graphql'

export const ogTagPreview: QueryResolvers['ogTagPreview'] = async ({
  url,
  customUserAgent,
}) => {
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

  return {
    id: url,
    userAgent: customUserAgent,
    error: customResult.error,
    result: customResult.result,
  }
}
