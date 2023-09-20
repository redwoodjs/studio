import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const connectionStatus: QueryResolvers['connectionStatus'] =
  async () => {
    const data = await db.connectionStatus.findUnique({
      where: {
        id: 1,
      },
      select: {
        developmentServer: true,
      },
    })

    return {
      id: '1',
      developmentServer: data?.developmentServer ?? false,
    }
  }
