import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

export default function WarningPanel({ warning }: { warning: any }) {
  return (
    <Callout
      className="w-full min-h-12"
      title="A warning"
      icon={ExclamationIcon}
      color="orange"
    >
      <pre>{JSON.stringify(warning, undefined, 2)}</pre>
    </Callout>
  )
}
