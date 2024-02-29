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
  const webConfig = getUserProjectConfig().web
  const webHost = webConfig.host ?? 'localhost'
  const graphqlEndpoint =
    webConfig.apiGraphQLUrl ??
    `http://${webHost}:${webConfig.port}${webConfig.apiUrl}/graphql`

  fastify.register(httpProxy, {
    upstream: `http://${webHost}:${webConfig.port}`,
    prefix: '/proxies/graphql',
    // Strip the initial scheme://host:port from the graphqlEndpoint
    rewritePrefix,
    disableCache: true,
  })

  done()
}
