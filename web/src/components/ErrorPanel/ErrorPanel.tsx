import React from 'react'

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Callout } from '@tremor/react'

export default function ErrorPanel({ error }: { error: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="An error occurred"
      icon={ExclamationTriangleIcon}
      color="rose"
    >
      <pre>{JSON.stringify(error, undefined, 2)}</pre>
    </Callout>
  )
}
