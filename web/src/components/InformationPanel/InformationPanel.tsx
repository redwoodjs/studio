import React from 'react'

import { InformationCircleIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

export default function InformationPanel({ message }: { message: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="Information notice"
      icon={InformationCircleIcon}
      color="cyan"
    >
      <pre>{JSON.stringify(message, undefined, 2)}</pre>
    </Callout>
  )
}
