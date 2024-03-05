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

function getCalloutColor(severity: OGPreviewSeverity): string {
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

function getCalloutIcon(severity: OGPreviewSeverity) {
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

export interface ProviderPreviewerProps {
  result: OGTagPreviewResponse['result']
}

interface Props extends ProviderPreviewerProps {
  providerAudit: OGTagPreviewProviderAudit
  userAgent?: string
}

export const Previewer = ({ result, providerAudit, userAgent }: Props) => {
  const { audit, provider } = providerAudit
  const { severity, messages } = audit

  return (
    <div className="space-y-4 pt-4">
      {severity === 'OK' && (
        <Flex justifyContent="center" alignItems="center">
          {((provider: OGPreviewProvider) => {
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
          })(provider)}
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
