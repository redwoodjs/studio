import React from 'react'

import { Callout } from '@tremor/react'

import { DiscordPreviewer } from 'src/components/OGTagPreviewers/DiscordPreviewer'
import { FacebookPreviewer } from 'src/components/OGTagPreviewers/FacebookPreviewer'
import { GenericPreviewer } from 'src/components/OGTagPreviewers/GenericPreviewer'
import { LinkedInPreviewer } from 'src/components/OGTagPreviewers/LinkedInPreviewer'
import { SlackPreviewer } from 'src/components/OGTagPreviewers/SlackPreviewer'
import { TwitterCardPreviewer } from 'src/components/OGTagPreviewers/TwitterCardPreviewer'
import { OGTagWarningIcon, OGTagErrorIcon, OGTagOKIcon } from 'src/icons/Icons'

import type {
  OGTagPreviewResponse,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
  OGPreviewSeverity,
} from '../../../types/graphql'

export type ProviderPreviewerProps = {
  result: OGTagPreviewResponse['result']
}

const getPreviewComponentForProvider = (
  provider: OGPreviewProvider
):
  | typeof GenericPreviewer
  | typeof TwitterCardPreviewer
  | typeof FacebookPreviewer
  | typeof LinkedInPreviewer
  | typeof DiscordPreviewer
  | typeof SlackPreviewer => {
  switch (provider) {
    case 'TWITTER':
      return TwitterCardPreviewer
    case 'FACEBOOK':
      return FacebookPreviewer
    case 'LINKEDIN':
      return LinkedInPreviewer
    case 'DISCORD':
      return DiscordPreviewer
    case 'SLACK':
      return SlackPreviewer
    default:
      return GenericPreviewer
  }
}

const getCalloutColor = (severity: OGPreviewSeverity): string => {
  switch (severity) {
    case 'WARNING':
      return 'amber'
    case 'ERROR':
      return 'rose'
    case 'OK':
      return 'green'
    default:
      return 'blue'
  }
}

const getCalloutIcon = (severity: OGPreviewSeverity) => {
  switch (severity) {
    case 'WARNING':
      return OGTagWarningIcon
    case 'ERROR':
      return OGTagErrorIcon
    case 'OK':
      return OGTagOKIcon
    default:
      return OGTagWarningIcon
  }
}

type Props = {
  result: OGTagPreviewResponse['result']
  providerAudit: OGTagPreviewProviderAudit
}

export const Previewer = (props: Props) => {
  console.log('props', props)
  const { providerAudit, result } = props
  console.log('providerAudit', providerAudit, result)

  const { audit, provider } = providerAudit

  console.log('audit', audit, provider)

  const PreviewComponent = getPreviewComponentForProvider(provider)

  return (
    <div className="space-y-6">
      <PreviewComponent result={result} />
      {audit && (
        <Callout
          className="mt-4"
          title="Audit"
          icon={getCalloutIcon(audit.severity)}
          color={getCalloutColor(audit.severity)}
        >
          {audit.messages?.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Callout>
      )}
    </div>
  )
}
