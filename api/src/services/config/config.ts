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
  const rscStatus = config.experimental?.rsc?.enabled
  const rscMessage = rscStatus ? 'SSR is enabled' : 'SSR is not enabled'
  const ssrStatus = config.experimental?.streamingSsr?.enabled
  const ssrMessage = ssrStatus ? 'RSC is enabled' : 'RSC is not enabled'

  const { host, port, apiUrl } = config.web

  // TODO: initially RSC and SSR will be behind feature flags that’s on by default in
  // our new (yet to be created) Bighorn template
  return {
    id: 'user-project-config-id',
    web: {
      id: 'user-project-config-web-id',
      host: host ?? 'localhost',
      port,
      apiUrl,
    },
    rsc: {
      id: 'user-project-config-rsc-id',
      enabled: { status: rscStatus, message: rscMessage },
    },
    ssr: {
      id: 'user-project-config-ssr-id',
      enabled: { status: ssrStatus, message: ssrMessage },
    },
  }
}
