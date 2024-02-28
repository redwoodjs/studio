import type {
  OGTagPreviewResponse,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
  OGTagPreviewAudit,
} from '../../../types/graphql'

import { DiscordValidation } from './validators/discord'
import { FacebookValidation } from './validators/facebook'
import { GenericValidation } from './validators/generic'
import { LinkedInValidation } from './validators/linkedin'
import { SlackValidation } from './validators/slack'
import { TwitterValidation } from './validators/twitter'

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

const validationForProvider = (provider: OGPreviewProvider) => {
  switch (provider) {
    case 'DISCORD':
      return DiscordValidation
      break
    case 'FACEBOOK':
      return FacebookValidation
      break
    case 'LINKEDIN':
      return LinkedInValidation
      break
    case 'SLACK':
      return SlackValidation
      break
      break
    case 'TWITTER':
      return TwitterValidation
      break
    default:
      return GenericValidation
  }
}

const auditForProvider = (
  result,
  provider: OGPreviewProvider
): OGTagPreviewProviderAudit => {
  const validationResult = validationForProvider(provider).safeParse(result)

  if (!validationResult.success) {
    return {
      provider,
      audit: {
        severity: 'WARNING',
        messages: formatMessages(validationResult),
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
