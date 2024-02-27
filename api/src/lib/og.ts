import type {
  OGTagPreviewData,
  // OGTagPreviewAudit,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
} from '../../types/graphql'

const auditForProvider = (
  result,
  provider: OGPreviewProvider
): OGTagPreviewProviderAudit => {
  return {
    provider,
    audit: { severity: 'WARNING', messages: ['Missing site'] },
  }
}

const PROVIDERS = [
  'GENERIC',
  'DISCORD',
  'FACEBOOK',
  'LINKEDIN',
  'SLACK',
  'TWITTER',
] as OGPreviewProvider[]

export const auditor = (
  result: OGTagPreviewData['result'],
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
