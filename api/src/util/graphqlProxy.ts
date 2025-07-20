import httpProxy from '@fastify/http-proxy'
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { getUserProjectConfig } from './project'

/**
 * Graphql Proxy - Takes studio "/proxies/graphql" and forwards to the projects
 * graphql endpoint
 * done() has been removed from the signature as fastify/fastify#5141 PR changed the signature
 */
export async function graphqlProxy(
  fastify: FastifyInstance,
  _options: FastifyPluginOptions
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
    rewritePrefix: '/' + graphqlEndpoint.split('/').slice(3).join('/'),
    disableCache: true,
  })
}
