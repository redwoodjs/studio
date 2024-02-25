import React from 'react'

import { Callout } from '@tremor/react'

import { OGTagWarningIcon, OGTagErrorIcon, OGTagOKIcon } from 'src/icons/Icons'

import type { OGTagPreviewData } from '../../../types/graphql'

type Props = {
  children: React.ReactNode
  audit: OGTagPreviewData['audit']
}

export type PreviewerProps = {
  ogPreviewData: OGTagPreviewData['result']
  audit: OGTagPreviewData['audit']
}

const getCalloutColor = (severity: OGTagPreviewData['audit']['severity']) => {
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

const getCalloutIcon = (severity: OGTagPreviewData['audit']['severity']) => {
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

export const Previewer = (props: Props) => {
  return (
    <div className="space-y-6">
      {props.children}
      {props.audit && (
        <Callout
          className="mt-4"
          title="Audit"
          icon={getCalloutIcon(props.audit.severity)}
          color={getCalloutColor(props.audit.severity)}
        >
          {props.audit.messages?.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Callout>
      )}
    </div>
  )
}
