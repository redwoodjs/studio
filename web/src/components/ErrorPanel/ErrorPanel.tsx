import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

export default function ErrorPanel({ error }: { error: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="An error occurred"
      icon={ExclamationIcon}
      color="rose"
    >
      <pre>{JSON.stringify(error, undefined, 2)}</pre>
    </Callout>
  )
}
