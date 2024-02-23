import httpProxy from '@fastify/http-proxy'
import type { FastifyInstance, HookHandlerDoneFunction } from 'fastify'

import {
  getUserProjectWebHost,
  getUserProjectWebPort,
  getUserProjectGraphQlEndpoint,
} from './project'

/**
 * Graphql Proxy - Takes studio "/proxies/graphql" and forwards to the projects
 * graphql endpoint
 */
export async function graphqlProxy(
  fastify: FastifyInstance,
  _options: never,
  done: HookHandlerDoneFunction
) {
  const webPort = getUserProjectWebPort()
  const webHost = getUserProjectWebHost()
  const graphqlEndpoint = getUserProjectGraphQlEndpoint()

  const upstream = `http://${webHost}:${webPort}`
  const rewritePrefix = '/' + graphqlEndpoint.split('/').slice(3).join('/')

  fastify.register(httpProxy, {
    upstream,
    prefix: '/proxies/graphql',
    // Strip the initial scheme://host:port from the graphqlEndpoint
    rewritePrefix,
    disableCache: true,
  })

  done()
}
