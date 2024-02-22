import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import TraceCell from 'src/components/TraceCell'
import {
  SpanGenericToggleContext,
  SpanGenericToggleContextType,
} from 'src/context/SpanGenericToggleContext'

const OpenTelemetryTracePage = ({ id }: { id: string }) => {
  const [show, setShow] = useState<SpanGenericToggleContextType['show']>({
    ancestors: false,
    descendants: false,
  })

  return (
    <>
      <Metadata
        title="OpenTelemetryTrace"
        description="OpenTelemetryTrace page"
      />
      <SpanGenericToggleContext.Provider
        value={{
          show,
          setShow,
        }}
      >
        <TraceCell id={id} />
      </SpanGenericToggleContext.Provider>
    </>
  )
}

export default OpenTelemetryTracePage
