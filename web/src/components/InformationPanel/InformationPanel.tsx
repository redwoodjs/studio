import React from 'react'

import { Callout } from '@tremor/react'

import { InfoIcon } from 'src/icons/Icons'

export default function InformationPanel({ message }: { message: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="Information notice"
      icon={InfoIcon}
      color="cyan"
    >
      <pre>{JSON.stringify(message, undefined, 2)}</pre>
    </Callout>
  )
}
