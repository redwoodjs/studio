import { z } from 'zod'

import type {
  OGTagPreviewResponse,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
} from '../../types/graphql'

const PROVIDERS = [
  'GENERIC',
  'DISCORD',
  'FACEBOOK',
  'LINKEDIN',
  'SLACK',
  'TWITTER',
] as OGPreviewProvider[]

const GenericValidation = z.object({
  ogTitle: z.string(),
  ogSite: z.string(),
})

const DiscordValidation = GenericValidation.extend({})
const FacebookValidation = GenericValidation.extend({})
const LinkedInValidation = GenericValidation.extend({})
const SlackValidation = GenericValidation.extend({})
const TwitterValidation = GenericValidation.extend({
  twitterTitle: z.string(),
  twitterDescription: z.string(),
  twitterCard: z.string(),
})

const formatMessages = (validationResult): string[] => {
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

const auditForProvider = (
  result,
  provider: OGPreviewProvider
): OGTagPreviewProviderAudit => {
  let validator = z.object({})

  switch (provider) {
    case 'DISCORD':
      validator = DiscordValidation
      break
    case 'FACEBOOK':
      validator = FacebookValidation
      break
    case 'LINKEDIN':
      validator = LinkedInValidation
      break
    case 'SLACK':
      validator = SlackValidation
      break
      break
    case 'TWITTER':
      validator = TwitterValidation
      break
    default:
      validator = GenericValidation
  }

  const validationResult = validator.safeParse(result)

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
      audit: { severity: 'ERROR', messages: ['Error fetching URL'] },
    }))
  }

  return PROVIDERS.map((provider) => auditForProvider(result, provider))
}
