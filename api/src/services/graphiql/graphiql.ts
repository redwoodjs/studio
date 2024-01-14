import type { QueryResolvers } from 'types/graphql'

import { getDBAuthHeader } from 'src/lib/authProviderEncoders/dbAuthEncoder'
import { getNetlifyAuthHeader } from 'src/lib/authProviderEncoders/netlifyAuthEncoder'
import { getSupabaseAuthHeader } from 'src/lib/authProviderEncoders/supabaseAuthEncoder'
import { getUserProjectConfig } from 'src/util/project'

function getGraphiqlConfig() {
  return getUserProjectConfig().experimental.studio?.graphiql
}

export const generateAuthHeaders: QueryResolvers['generateAuthHeaders'] =
  async (_parent: unknown, { userId }: { userId?: string }) => {
    const provider = getGraphiqlConfig()?.authImpersonation?.authProvider
    const impersonateUserId = getGraphiqlConfig()?.authImpersonation?.userId
    const email = getGraphiqlConfig()?.authImpersonation?.email
    const secret = getGraphiqlConfig()?.authImpersonation?.jwtSecret

    if (provider === 'dbAuth') {
      return getDBAuthHeader(userId || impersonateUserId)
    }
    if (provider === 'netlify') {
      return getNetlifyAuthHeader(userId || impersonateUserId, email, secret)
    }

    if (provider === 'supabase') {
      return getSupabaseAuthHeader(userId || impersonateUserId, email)
    }
  }
