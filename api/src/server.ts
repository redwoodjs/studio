import fs from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import { config } from 'dotenv-defaults'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import execa from 'execa'
import Fastify from 'fastify'
import { SMTPServer } from 'smtp-server'

import {
  coerceRootPath,
  redwoodFastifyWeb,
  redwoodFastifyAPI,
  redwoodFastifyGraphQLServer,
  DEFAULT_REDWOOD_FASTIFY_CONFIG,
} from '@redwoodjs/fastify'
import { getPaths, getConfig } from '@redwoodjs/project-config'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db as drizzleDB } from 'src/lib/drizzle/db'
import { seed as drizzleSeed } from 'src/lib/drizzle/seed'
import { logger } from 'src/lib/logger'
import { realtime } from 'src/lib/realtime'

import { startConnectionWatching } from './util/connectionWatching'
import { startWatchers } from './util/fsWatching'
import { handleMail } from './util/mail'
import { getStudioStatePath } from './util/project'

async function serve() {
  logger.info('Starting RedwoodJS Studio')
  // TODO: Have the redwood cli set this env var when execa runs this file
  // Ensure we're acting from the studio project root and not the user project root
  process.env.RWJS_CWD = __dirname

  // Create the ./.redwood/studio directory if it doesn't exist
  const studioStateDirectory = getStudioStatePath()
  if (!fs.existsSync(studioStateDirectory)) {
    fs.mkdirSync(studioStateDirectory)
  }

  // Set the DATABASE_URLs for studio
  // TODO: Have the redwood cli set this env var when execa runs this file
  process.env.DATABASE_URL_PRISMA = `file:${path.resolve(
    path.join(studioStateDirectory, 'studio-prisma.sqlite')
  )}`
  // TODO: Have the redwood cli set this env var when execa runs this file
  process.env.DATABASE_URL_DRIZZLE = path.resolve(
    path.join(studioStateDirectory, 'studio-drizzle.sqlite')
  )

  // Execute prisma migrate
  // 'rw build' should have generated the prisma client already
  logger.info('Migrating local Prisma database')
  await execa.command(
    `npx prisma migrate dev --schema ${path.join(
      __dirname,
      '../db/schema.prisma'
    )} --skip-seed --name ${Date.now()} --skip-generate`,
    {
      stdio: 'inherit',
    }
  )

  // Execute migrations for drizzle
  logger.info('Migrating local Drizzle database')
  migrate(drizzleDB, {
    migrationsFolder: path.join(
      getPaths().api.dist,
      'lib',
      'drizzle',
      'migrations'
    ),
  })
  logger.info('Seeding local Drizzle database')
  await drizzleSeed()

  // Load config
  const redwoodProjectPaths = getPaths()
  const redwoodConfig = getConfig()
  const apiRootPath = coerceRootPath(redwoodConfig.web.apiUrl)
  const port = redwoodConfig.web.port
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
  // TODO: Allow this port to be configurable
  smtpServer.listen(4319, undefined, () => {
    logger.info('Listening for mail...')
  })

  // Start
  fastify.listen({ port })
  fastify.ready(() => {
    logger.info('Studio is up and running!')
    logger.info(
      `To access the Studio, visit ${chalk.green(`http://localhost:${port}`)}`
    )
  })

  // Cleanup (async will not be resolved!)
  process.on('exit', () => {
    fastify.close()
  })
}

serve()
