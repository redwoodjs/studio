import { useEffect } from 'react'

export const OrbitSearch = () => {
  useEffect(() => {
    // Try initializing the search widget every 300 ms. Once it's initialized
    // we clear the interval.
    const interval = setInterval(() => {
      if (window.CommunitySearch.init) {
        window.CommunitySearch.init()
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto">
      <div
        style={{
          width: 'auto',
          height: 'auto',
          fontSize: '14px',
          lineHeight: 1,
        }}
      >
        <button
          aria-label="Open Community Search"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            height: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid rgb(65, 72, 87)',
            backgroundColor: 'rgb(23, 25, 27)',
          }}
          onClick={() => {
            window.CommunitySearch.toggleWidget()
          }}
        >
          <div style={{ flexGrow: 0, flexShrink: 0, height: '17px' }}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 16.25L12.4875 12.9875M8.25 5C10.3211 5 12 6.67893 12 8.75M14.25 8.75C14.25 12.0637 11.5637 14.75 8.25 14.75C4.93629 14.75 2.25 12.0637 2.25 8.75C2.25 5.43629 4.93629 2.75 8.25 2.75C11.5637 2.75 14.25 5.43629 14.25 8.75Z"
                stroke="rgb(154, 164, 178)"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div style={{ color: 'rgb(154, 164, 178)', flexGrow: 1 }}>
            Community search...
          </div>
          <div style={{ display: 'flex', flexGrow: 0 }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                padding: '4px',
                marginRight: '3px',
                borderRadius: '4px',
                border: '1px solid rgb(65, 72, 87)',
                color: 'rgb(199, 206, 217)',
                backgroundColor: 'rgb(38, 42, 45)',
              }}
            >
              ⌘
            </div>
            <div
              style={{
                width: '24px',
                height: '24px',
                padding: '4px',
                marginRight: '0px',
                borderRadius: '4px',
                border: '1px solid rgb(65, 72, 87)',
                color: 'rgb(199, 206, 217)',
                backgroundColor: 'rgb(38, 42, 45)',
              }}
            >
              K
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
