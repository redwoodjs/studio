import React from 'react'

import { Callout } from '@tremor/react'

import { ErrorIcon } from 'src/icons/Icons'

export default function ErrorPanel({ error }: { error: unknown }) {
  return (
    <Callout
      className="min-h-12 w-full"
      title="An error occurred"
      icon={ErrorIcon}
      color="rose"
    >
      <pre>{JSON.stringify(error, undefined, 2)}</pre>
    </Callout>
  )
}
