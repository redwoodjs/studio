import { liveQueryStore } from '@redwoodjs/realtime'

import { db } from 'src/lib/db'

import { getUserProjectConfig } from './project'

const STATUS_CHECK_INTERVAL_MS = 17_000
let statusInterval: NodeJS.Timeout | null = null

export function startConnectionWatching() {
  const webConfig = getUserProjectConfig().web
  const webHost = webConfig.host ?? 'localhost'
  const graphqlEndpoint =
    webConfig.apiGraphQLUrl ??
    `http://${webHost}:${webConfig.port}${webConfig.apiUrl}/graphql`

  if (statusInterval) {
    stopConnectionWatching()
  }

  statusInterval = setInterval(async () => {
    // Ping the user project's graphQL health check endpoint
    // to see if it's running
    let isConnected = false
    try {
      isConnected = (await fetch(`${graphqlEndpoint}/health`)).ok
    } catch (_error) {
      // If the web server is not running, the fetch will throw an error
      // but eat the error and webRespondedOk will be false
      console.warn('🚨 Development Server not connected.')
    }

    // Upsert with a hard-coded ID of 1 as we only ever want the one row
    await db.connectionStatus.upsert({
      where: { id: 1 },
      create: { id: 1, developmentServer: isConnected },
      update: { developmentServer: isConnected },
    })

    // Invalidate the live query
    await liveQueryStore?.invalidate('Query.connectionStatus')
  }, STATUS_CHECK_INTERVAL_MS)
}

export function stopConnectionWatching() {
  if (!statusInterval) {
    return
  }

  clearInterval(statusInterval)
  statusInterval = null
}
