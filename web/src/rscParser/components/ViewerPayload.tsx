import React, { useState } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { createFlightResponse } from '../createFlightResponse'
import { RscChunkMessage } from '../types'

import { FlightResponse } from './FlightResponse'
import { GenericErrorBoundaryFallback } from './GenericErrorBoundaryFallback'
import { EndTimeContext } from './ViewerStreams'

export function ViewerPayload({ defaultPayload }: { defaultPayload: string }) {
  const [payload] = useState(defaultPayload)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full flex-col gap-2">
        <h3 className="font-medium">Payload</h3>

        <div
          id="payload"
          className="resize-none rounded-md bg-slate-200 p-3 dark:bg-slate-800 dark:text-slate-200"
          spellCheck="false"
        >
          {payload}
        </div>
      </div>
      <div className="w-full">
        <ErrorBoundary
          FallbackComponent={GenericErrorBoundaryFallback}
          key={payload}
        >
          <Viewer payload={payload} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

function Viewer({ payload }: { payload: string }) {
  const messages = [
    {
      type: 'RSC_CHUNK',
      tabId: 0,
      data: {
        fetchUrl: 'https://example.com',
        fetchHeaders: {
          'Content-Type': 'application/json',
        },
        fetchStartTime: 0,
        chunkStartTime: 0,
        chunkEndTime: 0,
        chunkValue: Array.from(new TextEncoder().encode(payload)),
      },
    } satisfies RscChunkMessage,
  ]

  const flightResponse = createFlightResponse(messages)

  return (
    <EndTimeContext.Provider value={Infinity}>
      <FlightResponse flightResponse={flightResponse} />
    </EndTimeContext.Provider>
  )
}
