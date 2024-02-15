import type { Query } from 'types/graphql'

import { getUserProjectConfig } from 'src/util/project'

export const studioConfig = async (): Promise<Query['studioConfig']> => {
  const config = await getUserProjectConfig()

  return {
    id: 'sc',
    basePort: config.studio.basePort,
    graphiql: {
      id: 'g',
      endpoint: config.studio.graphiql.endpoint,
      authImpersonation: {
        id: 'ai',
        authProvider: config.studio.graphiql.authImpersonation.authProvider,
        userId: config.studio.graphiql.authImpersonation.userId,
        email: config.studio.graphiql.authImpersonation.email,
        jwtSecret: config.studio.graphiql.authImpersonation.jwtSecret,
      },
    },
  }
}

export const userProjectConfig = async (): Promise<
  Query['userProjectConfig']
> => {
  const config = await getUserProjectConfig()
  const status = config.experimental?.streamingSsr?.enabled
  const message = status ? 'SSR is enabled' : 'SSR is not enabled'

  // TODO:  initially ssr will be behind a feature flag
  // that’s on by default in our new (yet to be created)
  // Bighorn template
  return {
    id: 'up',
    ssr: { id: 'ssr', enabled: { status, message } },
  }
}
