import type {
  OGTagPreviewResponse,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
  OGTagPreviewAudit,
} from '../../../types/graphql'

import { DiscordAuditor } from './auditors/discord'
import { FacebookAuditor } from './auditors/facebook'
import { GenericAuditor } from './auditors/generic'
import { LinkedInAuditor } from './auditors/linkedin'
import { SlackAuditor } from './auditors/slack'
import { TwitterAuditor } from './auditors/twitter'

const PROVIDERS = [
  'GENERIC',
  'DISCORD',
  'FACEBOOK',
  'LINKEDIN',
  'SLACK',
  'TWITTER',
] as OGPreviewProvider[]

const formatMessages = (validationResult): OGTagPreviewAudit['messages'] => {
  const messages = []
  const formatted = validationResult['error'].format()

  Object.entries(formatted).forEach(([key, value]) => {
    if (key !== '_errors') {
      const errors = value['_errors'] || []
      messages.push(`${key}: ${errors.join(', ')}`)
    }
  })

  return messages
}

const getProviderAuditor = (provider: OGPreviewProvider) => {
  switch (provider) {
    case 'DISCORD':
      return DiscordAuditor
      break
    case 'FACEBOOK':
      return FacebookAuditor
      break
    case 'LINKEDIN':
      return LinkedInAuditor
      break
    case 'SLACK':
      return SlackAuditor
      break
      break
    case 'TWITTER':
      return TwitterAuditor
      break
    default:
      return GenericAuditor
  }
}

const auditForProvider = (
  result,
  provider: OGPreviewProvider
): OGTagPreviewProviderAudit => {
  const auditResult = getProviderAuditor(provider).safeParse(result)

  if (!auditResult.success) {
    return {
      provider,
      audit: {
        severity: 'WARNING',
        messages: formatMessages(auditResult),
      },
    }
  }

  return {
    provider,
    audit: { severity: 'OK', messages: ['Preview success'] },
  }
}

export const auditor = (
  result: OGTagPreviewResponse['result'],
  error: boolean
): OGTagPreviewProviderAudit[] => {
  if (error) {
    return PROVIDERS.map((provider) => ({
      provider,
      audit: { severity: 'ERROR', messages: ['Unable to preview'] },
    }))
  }

  return PROVIDERS.map((provider) => auditForProvider(result, provider))
}
