import type { Query } from 'types/graphql'

import { getUserProjectConfig } from 'src/util/project'

export const studioConfig = async (): Promise<Query['studioConfig']> => {
  const config = await getUserProjectConfig()
  const { basePort } = config.studio
  const { endpoint } = config.studio.graphiql
  const { authProvider, userId, email, jwtSecret } =
    config.studio.graphiql.authImpersonation

  return {
    id: 'studio-config-id',
    basePort,
    graphiql: {
      id: 'studio-config-graphql-id',
      endpoint,
      authImpersonation: {
        id: 'studio-config-graphql-auth-id',
        authProvider,
        userId,
        email,
        jwtSecret,
      },
    },
  }
}

export const userProjectConfig = async (): Promise<
  Query['userProjectConfig']
> => {
  const config = getUserProjectConfig()
  const status = config.experimental?.streamingSsr?.enabled
  const message = status ? 'SSR is enabled' : 'SSR is not enabled'

  const { host, port, apiUrl } = config.web

  // TODO: initially SSR will be behind a feature flag that’s on by default in
  // our new (yet to be created) Bighorn template
  return {
    id: 'user-project-config-id',
    web: {
      id: 'user-project-config-web-id',
      host: host ?? 'localhost',
      port,
      apiUrl,
    },
    ssr: { id: 'user-project-config-ssr-id', enabled: { status, message } },
  }
}
