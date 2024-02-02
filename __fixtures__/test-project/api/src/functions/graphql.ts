import { authDecoder as dbAuthDecoder } from '@redwoodjs/auth-dbauth-api'
import { authDecoder as NetlifyAuthDecoder } from '@redwoodjs/auth-netlify-api'
import { authDecoder as supabaseAuthDecoder } from '@redwoodjs/auth-supabase-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  authDecoder: [dbAuthDecoder, supabaseAuthDecoder, NetlifyAuthDecoder],
  getCurrentUser,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
  openTelemetryOptions: {
    resolvers: true,
    result: true,
    variables: true,
  },
})
