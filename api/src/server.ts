import fs from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import { config } from 'dotenv-defaults'
import execa from 'execa'
import Fastify from 'fastify'
import open from 'open'
import { SMTPServer } from 'smtp-server'

import {
  coerceRootPath,
  redwoodFastifyWeb,
  redwoodFastifyAPI,
  redwoodFastifyGraphQLServer,
  DEFAULT_REDWOOD_FASTIFY_CONFIG,
} from '@redwoodjs/fastify'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { logger } from 'src/lib/logger'
import { realtime } from 'src/lib/realtime'

import { startConnectionWatching } from './util/connectionWatching'
import { startWatchers } from './util/fsWatching'
import { handleMail } from './util/mail'
import {
  getUserProjectConfig,
  getStudioPaths,
  getStudioStatePath,
  getStudioConfig,
} from './util/project'

async function serve({ open: autoOpen }: { open: boolean } = { open: false }) {
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
  process.env.RWSTUDIO_DATABASE_URL = `file:${path.resolve(
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
  const redwoodProjectPaths = getStudioPaths()
  const userConfig = getUserProjectConfig()
  const studioConfig = getStudioConfig()
  const apiRootPath = coerceRootPath(studioConfig.web.apiUrl)
  const port = userConfig.experimental.studio.basePort
  config({
    path: path.join(redwoodProjectPaths.base, '.env'),
    defaults: path.join(redwoodProjectPaths.base, '.env.defaults'),
    multiline: true,
  })

  // Start the studio web+api+graphql server
  const fastify = Fastify(DEFAULT_REDWOOD_FASTIFY_CONFIG)
  await fastify.register(redwoodFastifyWeb)
  await fastify.register(redwoodFastifyAPI, {
    redwood: {
      apiRootPath,
    },
  })
  await fastify.register(redwoodFastifyGraphQLServer, {
    loggerConfig: {
      logger: logger,
    },
    graphiQLEndpoint: '/.redwood/functions/graphql',
    sdls,
    services,
    directives,
    allowIntrospection: true,
    allowGraphiQL: true,
    realtime,
  })

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
  smtpServer.listen(port + 1, undefined, () => {
    logger.info('Listening for mail...')
  })

  // Start
  fastify.listen({ port })
  fastify.ready(() => {
    logger.info('Studio is up and running!')
    logger.info(
      `To access the Studio, visit ${chalk.green(`http://localhost:${port}`)}`
    )

    if (autoOpen) {
      open(`http://localhost:${port}`)
    }
  })

  // Cleanup (async will not be resolved!)
  process.on('exit', () => {
    fastify.close()
  })
}

serve()
