import fs from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import { config } from 'dotenv-defaults'
import execa from 'execa'
import open from 'open'
import { SMTPServer } from 'smtp-server'

import { createServer } from '@redwoodjs/api-server'
import { coerceRootPath, redwoodFastifyWeb } from '@redwoodjs/fastify'

import { logger } from 'src/lib/logger'

import { startConnectionWatching } from './util/connectionWatching'
import { startWatchers } from './util/fsWatching'
import { graphqlProxy } from './util/graphqlProxy'
import { handleMail } from './util/mail'
import {
  getStudioConfig,
  getStudioStatePath,
  getUserProjectConfig,
  getUserProjectPaths,
} from './util/project'
import { rewriteApiPortEnvVar } from './util/rewriteWebIndexApiPort'

export async function serve(
  { open: autoOpen, enableWeb }: { open: boolean; enableWeb: boolean } = {
    open: false,
    enableWeb: false,
  }
) {
  logger.info('Starting RedwoodJS Studio')
  // TODO: Have the redwood cli set this env var when execa runs this file
  // Ensure we're acting from the studio project root and not the user project root
  process.env.RWJS_CWD = __dirname

  // Create the ./.redwood/studio directory if it doesn't exist
  const studioStateDirectory = getStudioStatePath()
  if (!fs.existsSync(studioStateDirectory)) {
    fs.mkdirSync(studioStateDirectory)
  }

  // Set the DATABASE_URL for studio
  // TODO: Have the redwood cli set this env var when execa runs this file
  process.env.RW_STUDIO_DATABASE_URL = `file:${path.resolve(
    path.join(studioStateDirectory, 'prisma.sqlite')
  )}?connection_limit=1`

  // Execute prisma migrate
  // 'rw build' should have generated the prisma client already
  logger.info('Migrating local Prisma database')
  await execa.command(
    `npx prisma migrate deploy --schema ${path.join(
      __dirname,
      '../db/schema.prisma'
    )}`,
    {
      stdio: 'inherit',
    }
  )

  // Execute the prisma seed
  logger.info('Running any seeding of the Prisma database')
  await execa.command(`node ${path.join(__dirname, 'lib', 'seed.js')}`, {
    stdio: 'inherit',
  })

  // Load config
  const userPaths = getUserProjectPaths()
  const userConfig = getUserProjectConfig()
  const studioConfig = getStudioConfig()
  const apiRootPath = enableWeb ? coerceRootPath(studioConfig.web.apiUrl) : ''
  const webPort = userConfig.studio.basePort
  const apiPort = enableWeb ? webPort : webPort + 1

  config({
    path: path.join(userPaths.base, '.env'),
    defaults: path.join(userPaths.base, '.env.defaults'),
    multiline: true,
  })

  rewriteApiPortEnvVar(apiPort)

  const server = await createServer({
    apiRootPath,
  })

  if (enableWeb) {
    await server.register(redwoodFastifyWeb)
  }

  await server.register(graphqlProxy)

  // Start filesystem watchers
  await startWatchers()

  // Start connection watchers
  startConnectionWatching()

  // Start the mail server
  const smtpServer = new SMTPServer({
    banner: 'RedwoodJS Studio SMTP Server',
    authOptional: true,
    hideSTARTTLS: true,
    onData: handleMail,
  })
  smtpServer.listen(apiPort + 1, undefined, () => {
    logger.info('Listening for mail...')
  })

  // Start
  server.listen({ port: apiPort })
  server.addHook('onReady', (done) => {
    logger.info('Studio is up and running!')

    const prettyUrl = chalk.green(`http://localhost:${webPort}`)
    logger.info(`To access the Studio, visit ${prettyUrl}`)

    if (autoOpen) {
      open(`http://localhost:${webPort}`)
    }

    done()
  })

  // Cleanup (async will not be resolved!)
  process.on('exit', () => {
    server.close()
  })
}

// Only run this function if this file is being run directly
if (require.main === module) {
  serve()
}
