import type { OgObject } from 'open-graph-scraper/dist/lib/types'

import type {
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
  result: OgObject,
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
    audit: { severity: 'OK', messages: ['All required tags provided.'] },
  }
}

export const auditor = (
  result: OgObject,
  error: boolean
): { audits: OGTagPreviewProviderAudit[]; auditedResult: OgObject } => {
  if (error) {
    return {
      audits: PROVIDERS.map((provider) => ({
        provider,
        audit: { severity: 'ERROR', messages: ['Unable to preview'] },
      })),
      auditedResult: result,
    }
  }

  const audits = PROVIDERS.map((provider) => auditForProvider(result, provider))

  return {
    audits,
    auditedResult: resultWithValidationResultMessages(audits, result),
  }
}

export const resultWithValidationResultMessages = (
  audits: OGTagPreviewProviderAudit[],
  result: OgObject
): OgObject => {
  const validationMessages = []
  const providers = []

  audits?.map((providerAudit) => {
    const { provider, audit } = providerAudit
    if (audit) {
      const { severity, messages } = audit
      if (severity !== 'OK') {
        providers.push(provider)
        validationMessages.push(messages)
      }
    }
  })

  if (validationMessages.length > 0) {
    result.success = false
    result.error = `Audit failed for ${providers.join(
      ', '
    )}. ${validationMessages.join(', ')}`
  }

  return result
}
