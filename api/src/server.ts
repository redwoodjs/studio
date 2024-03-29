import fs from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import { config } from 'dotenv-defaults'
import execa from 'execa'
import open from 'open'
import { SMTPServer } from 'smtp-server'

import { createServer } from '@redwoodjs/api-server'
import { coerceRootPath, redwoodFastifyWeb } from '@redwoodjs/fastify-web'

import { logger } from 'src/lib/logger'

import { graphqlProxy } from './util/graphqlProxy'
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

  const prismaSchemaPath = path
    .join(__dirname, '../db/schema.prisma')
    .replaceAll(' ', '\\ ')

  // Generate the Prisma client, this is done at runtime as it is platform/architecture specific
  logger.info('Generating Prisma client')
  await execa.command(`npx prisma generate --schema ${prismaSchemaPath}`, {
    stdio: 'inherit',
  })

  // Execute prisma migrate
  logger.info('Migrating local Prisma database')
  await execa.command(
    `npx prisma migrate deploy --schema ${prismaSchemaPath}`,
    {
      stdio: 'inherit',
    }
  )

  // Execute the prisma seed
  const prismaSeedPath = path
    .join(__dirname, 'lib', 'seed.js')
    .replaceAll(' ', '\\ ')
  logger.info('Running any seeding of the Prisma database')
  await execa.command(`node ${prismaSeedPath}`, {
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

  // `createServer` reads process.argv, and will error out when it finds
  // arguments it doesn't recognize. We're calling it programmatically, so
  // don't want to forward any cli args to it
  process.argv = []
  const server = await createServer({
    apiRootPath,
  })

  if (enableWeb) {
    await server.register(redwoodFastifyWeb)
  }

  await server.register(graphqlProxy)

  // Start filesystem watchers
  const { startWatchers } = await import('./util/fsWatching.js')
  await startWatchers()

  // Start connection watchers
  const { startConnectionWatching } = await import(
    './util/connectionWatching.js'
  )
  startConnectionWatching()

  // Start span processing
  const { startSpanProcessor } = await import(
    './functions/otel-trace/otel-trace.js'
  )

  startSpanProcessor()

  // Start the mail server
  const { handleMail } = await import('./util/mail.js')
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
