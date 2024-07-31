import { useEffect, useState, useRef } from 'react'

import { Button, Switch } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import { TrashIcon } from 'src/icons/Icons'

const RscCachePage = () => {
  const webSocket = useRef<WebSocket>(null)
  const [rscCache, setRscCache] = useState<Record<string, string>>({})
  const [fullPageCacheEnabled, setFullPageCacheEnabled] = useState(true)
  const [lastUpdatedKey, setLastUpdatedKey] = useState('')

  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:18998')

    // Connection opened
    socket.addEventListener('open', () => {
      socket.send('Connection established')

      // This timeout might not be needed, but just giving things a moment to
      // settle
      setTimeout(() => {
        socket.send(JSON.stringify({ id: 'rsc-cache-read' }))
      }, 200)
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
      <h1 className="mb-4 flex text-2xl text-white">Full-page Cache Entries</h1>
      <div className="flex justify-between">
        <div className="flex flex-row">
          <Switch
            checked={fullPageCacheEnabled}
            onChange={(value: boolean) => {
              const ws = webSocket.current

              if (value) {
                ws?.send(JSON.stringify({ id: 'rsc-cache-enable' }))
              } else {
                ws?.send(JSON.stringify({ id: 'rsc-cache-disable' }))
                ws?.send(JSON.stringify({ id: 'rsc-cache-clear' }))
              }

              setFullPageCacheEnabled(value)
            }}
            className="leading-3"
          />
          {fullPageCacheEnabled ? (
            <div className="ml-4">
              <div className="text-white">Full-Page Caching Enabled</div>
              <div className="text-xs italic text-white">
                Disabling clears the cache
              </div>
            </div>
          ) : (
            <div className="ml-4 flex flex-col justify-center">
              <div className="text-white">Full-Page Caching Disabled</div>
            </div>
          )}
        </div>
        <Button
          variant="secondary"
          icon={TrashIcon}
          onClick={() => {
            webSocket.current?.send(JSON.stringify({ id: 'rsc-cache-clear' }))
          }}
        >
          Clear Cache
        </Button>
      </div>

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
