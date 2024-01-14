import httpProxy from '@fastify/http-proxy'
import type { FastifyInstance, HookHandlerDoneFunction } from 'fastify'

import { getUserProjectConfig } from './project'

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
  const graphqlEndpoint =
    webConfig.apiGraphQLUrl ??
    `http://${webConfig.host}:${webConfig.port}${webConfig.apiUrl}/graphql`

  fastify.register(httpProxy, {
    upstream: `http://${webConfig.host}:${webConfig.port}`,
    prefix: '/proxies/graphql',
    // Strip the initial scheme://host:port from the graphqlEndpoint
    rewritePrefix: '/' + graphqlEndpoint.split('/').slice(3).join('/'),
    disableCache: true,
  })

  done()
}
