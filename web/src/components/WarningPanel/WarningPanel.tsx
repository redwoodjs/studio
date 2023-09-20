import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

export default function WarningPanel({ warning }: { warning: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="A warning"
      icon={ExclamationIcon}
      color="orange"
    >
      <pre>{JSON.stringify(warning, undefined, 2)}</pre>
    </Callout>
  )
}
