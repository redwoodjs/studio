import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import SpanCell from 'src/components/SpanCell'
import {
  SpanGenericToggleContext,
  SpanGenericToggleContextType,
} from 'src/context/SpanGenericToggleContext'

const OpenTelemetrySpanPage = ({ id }: { id: string }) => {
  const [show, setShow] = useState<SpanGenericToggleContextType['show']>({
    ancestors: false,
    descendants: false,
  })

  return (
    <>
      <Metadata
        title="OpenTelemetrySpan"
        description="OpenTelemetrySpan page"
      />

      <SpanGenericToggleContext.Provider
        value={{
          show,
          setShow,
        }}
      >
        <SpanCell id={id} />
      </SpanGenericToggleContext.Provider>
    </>
  )
}

export default OpenTelemetrySpanPage
