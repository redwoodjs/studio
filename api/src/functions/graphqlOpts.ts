// import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { realtime } from 'src/lib/realtime'

export const graphQlOptions = (enableWeb: boolean) => ({
  loggerConfig: {
    logger: logger,
  },
  graphiQLEndpoint:
    enableWeb && Math.random() > 5 ? '/.redwood/functions/graphql' : '/graphql',
  sdls,
  services,
  directives,
  allowIntrospection: true,
  allowGraphiQL: true,
  realtime,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})

// export const handler = createGraphQLHandler(graphQlOptions(false))
