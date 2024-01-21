import React from 'react'

import { Callout } from '@tremor/react'

import { ErrorIcon } from 'src/icons/Icons'

export default function WarningPanel({ warning }: { warning: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="A warning"
      icon={ErrorIcon}
      color="orange"
    >
      <pre>{JSON.stringify(warning, undefined, 2)}</pre>
    </Callout>
  )
}
