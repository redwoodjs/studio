import openGraphScraper from 'open-graph-scraper'
import type { QueryResolvers } from 'types/graphql'

import { SyntaxError } from '@redwoodjs/graphql-server'

import { auditor } from 'src/lib/og/og'
import { getUserProjectConfig } from 'src/util/project'

const fetchWithTiming = async (url, headers) => {
  // Start timing just before the request is made
  const start = performance.now()

  try {
    const response = await fetch(url, headers)

    // Time after receiving the first byte
    const executionTime = performance.now()

    const clone = response.clone()

    // Ensure the body is fully read
    const content = await clone.blob()

    // Time after receiving the last byte
    const responseTime = performance.now()

    const html = await response.text()
    const size = content.size

    const metrics = {
      startTime: start,
      executionTime: executionTime - start,
      responseTime: responseTime - start,
      responseSize: size,
    }

    return { html, metrics }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error // Rethrow the error after logging
  }
}

export const ogTagPreview: QueryResolvers['ogTagPreview'] = async ({
  url,
  customUserAgent,
}) => {
  // Use an example of Google's user agent if none is provided
  customUserAgent ??=
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36'

  const config = await getUserProjectConfig()

  // short-cut in the case that SSR is disabled
  if (!config.experimental?.streamingSsr?.enabled) {
    throw new SyntaxError('SSR is not enabled')
  }

  try {
    const { html, metrics } = await fetchWithTiming(url, {
      headers: {
        'User-Agent': customUserAgent,
      },
    })

    const customResult = await openGraphScraper({ html })

    const { result, error } = customResult
    const { audits, auditedResult } = auditor(result, error)

    return {
      id: url,
      userAgent: customUserAgent,
      error,
      result: auditedResult,
      audits,
      metrics,
    }
  } catch {
    throw new SyntaxError(
      `Unable to preview ${url} with user agent ${customUserAgent}`
    )
  }
}
