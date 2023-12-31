import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

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
      <MetaTags
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
