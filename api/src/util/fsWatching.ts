import path from 'node:path'

import chokidar from 'chokidar'

import { liveQueryStore } from '@redwoodjs/realtime'

import { resyncMailRenderers } from 'src/services/mailRenderers/mailRenderers'
import { resyncMailTemplate } from 'src/services/mailTemplates/mailTemplates'

import { getUserProjectPaths } from './project'

let watcher: chokidar.FSWatcher | undefined

export async function startWatchers() {
  const userPaths = getUserProjectPaths()
  watcher = chokidar.watch(`**/*.*`, {
    cwd: userPaths.api.dist,
    ignoreInitial: true,
    usePolling: true,
    interval: 500,
  })

  // TODO: We should batch up the changed files so we can make optimizations

  const listenOnEventsForDist = ['ready', 'add', 'change']
  for (let i = 0; i < listenOnEventsForDist.length; i++) {
    watcher.on(listenOnEventsForDist[i], async (pathThatChanged: string) => {
      if (pathThatChanged === undefined) {
        return
      }

      // We don't care about the .js.map files
      if (pathThatChanged.endsWith('.js.map')) {
        return
      }

      // Mail related watching
      if (pathThatChanged === path.join('lib', 'mailer.js')) {
        // Option 1: This works, but it's a bit of a hack
        // fetch('http://localhost:8910/api/mailRenderers/resyncMailRenderers', {})

        await resyncMailRenderers()
        return
      }
      if (pathThatChanged.startsWith('mail' + path.sep)) {
        await resyncMailTemplate({
          rawTemplateDistPath: path.join(userPaths.api.dist, pathThatChanged),
        })
        await liveQueryStore?.invalidate('Query.mailSMTPCount')
        return
      }
    })
  }
}

export async function stopWatchers() {
  if (watcher !== undefined) {
    await watcher.close()
  }
}
