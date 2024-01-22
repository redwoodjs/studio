import React from 'react'

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Callout } from '@tremor/react'

export default function WarningPanel({ warning }: { warning: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="A warning"
      icon={ExclamationTriangleIcon}
      color="orange"
    >
      <pre>{JSON.stringify(warning, undefined, 2)}</pre>
    </Callout>
  )
}
