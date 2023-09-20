import React from 'react'

import { ExclamationIcon } from '@heroicons/react/outline'
import { Callout } from '@tremor/react'

export default function ErrorPanel({ error }: { error: any }) {
  return (
    <Callout
      className="w-full min-h-12"
      title="An error occurred"
      icon={ExclamationIcon}
      color="rose"
    >
      <pre>{JSON.stringify(error, undefined, 2)}</pre>
    </Callout>
  )
}
