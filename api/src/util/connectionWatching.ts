import { liveQueryStore } from '@redwoodjs/realtime'

import { db } from 'src/lib/db'

const STATUS_CHECK_INTERVAL_MS = 2000
let statusInterval: NodeJS.Timeout | null = null

export function startConnectionWatching() {
  if (statusInterval) {
    stopConnectionWatching()
  }

  statusInterval = setInterval(async () => {
    // Ping the web server to see if it's running
    let webRespondedOk = false
    try {
      webRespondedOk = (await fetch('http://localhost:8910/')).ok
    } catch (_error) {
      //
    }

    // Upsert with a hard-coded ID of 1 as we only ever want the one row
    await db.connectionStatus.upsert({
      where: { id: 1 },
      create: { id: 1, developmentServer: webRespondedOk },
      update: { developmentServer: webRespondedOk },
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
