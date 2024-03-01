import React from 'react'

import { Callout, Flex } from '@tremor/react'

import { OGTagWarningIcon, OGTagErrorIcon, OGTagOKIcon } from 'src/icons/Icons'

import type {
  OGTagPreviewResponse,
  OGTagPreviewProviderAudit,
  OGPreviewProvider,
  OGPreviewSeverity,
} from '../../../types/graphql'

import { DiscordPreviewer } from './DiscordPreviewer'
import { FacebookPreviewer } from './FacebookPreviewer'
import { GenericPreviewer } from './GenericPreviewer'
import { LinkedInPreviewer } from './LinkedInPreviewer'
import { SlackPreviewer } from './SlackPreviewer'
import { TwitterCardPreviewer } from './TwitterCardPreviewer'

export type ProviderPreviewerProps = {
  result: OGTagPreviewResponse['result']
}

const PreviewComponentForProvider = ({
  provider,
  result,
}: {
  provider: OGPreviewProvider
  result: OGTagPreviewResponse['result']
}) => {
  switch (provider) {
    case 'TWITTER':
      return <TwitterCardPreviewer result={result} />
    case 'FACEBOOK':
      return <FacebookPreviewer result={result} />
    case 'LINKEDIN':
      return <LinkedInPreviewer result={result} />
    case 'DISCORD':
      return <DiscordPreviewer result={result} />
    case 'SLACK':
      return <SlackPreviewer result={result} />
    default:
      return <GenericPreviewer result={result} />
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
  userAgent?: string
}

export const Previewer = (props: Props) => {
  const { providerAudit, result, userAgent } = props
  const { audit, provider } = providerAudit
  const { severity, messages } = audit

  return (
    <div className="space-y-4 pt-4">
      {severity === 'OK' && (
        <Flex justifyContent="center" alignItems="center">
          <PreviewComponentForProvider provider={provider} result={result} />
        </Flex>
      )}
      {severity && messages && (
        <Callout
          className="mt-4"
          title="Tag Audit"
          icon={getCalloutIcon(severity)}
          color={getCalloutColor(severity)}
        >
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
          {userAgent &&
            userAgent.toLowerCase().includes(provider.toLowerCase()) && (
              <div>This preview is likely to be used by {userAgent}</div>
            )}
        </Callout>
      )}
    </div>
  )
}
