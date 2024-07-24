import { useEffect, useState, useRef } from 'react'

import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

const RscCachePage = () => {
  const webSocket = useRef<WebSocket>(null)
  const [rscCache, setRscCache] = useState<Record<string, any>>({})
  const [lastUpdatedKey, setLastUpdatedKey] = useState('')

  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:18998')

    // Connection opened
    socket.addEventListener('open', () => {
      socket.send('Connection established')
    })

    // Listen for messages
    socket.addEventListener('message', (event) => {
      const message = event.data.toString()
      console.log('Message from server', message)
      if (message.startsWith('{')) {
        const data = JSON.parse(event.data)
        console.log('Message data', data)

        if (data.id === 'rsc-cache-set') {
          setRscCache(data.payload.fullCache)
          setLastUpdatedKey(data.payload.updatedKey)
        }

        if (data.id === 'rsc-cache-update') {
          setRscCache(data.payload.fullCache)
        }
      }
    })

    webSocket.current = socket

    return () => webSocket.current?.close()
  }, [])

  return (
    <>
      <Metadata
        title="Rsc Cache Introspection"
        description="View and manage the Rsc Cache."
      />
      <Title>Full-page Cache Entries</Title>

      <dl className="pt-4 text-xs text-white">
        {Object.entries(rscCache).map(([key, value]) => {
          const keyLocation = JSON.parse(key).location
          const displayKey =
            keyLocation.pathname +
            (keyLocation.search ? `?${keyLocation.search}` : '')
          const isLastUpdated = key === lastUpdatedKey
          return (
            <div key={key + isLastUpdated.toString()} className="pb-1">
              <dt className={'font-bold' + (isLastUpdated ? ' italic' : '')}>
                {displayKey}:
                <button
                  className="ml-2 inline-block text-red-700"
                  onClick={() => {
                    webSocket.current?.send(
                      JSON.stringify({ id: 'rsc-cache-delete', key })
                    )
                  }}
                >
                  Delete
                </button>
              </dt>
              <dd className="pl-4 font-mono">
                {JSON.stringify(value).slice(0, 150)}&hellip;
              </dd>
            </div>
          )
        })}
      </dl>
    </>
  )
}

export default RscCachePage
