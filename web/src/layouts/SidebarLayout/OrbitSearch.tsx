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

  // TODO: User same colors here as we use for the rest of the UI. Right now
  // they're just the closest match to the colors Orbit uses
  return (
    <div className="container mx-auto">
      <div className="h-auto w-auto text-sm leading-none">
        <button
          aria-label="Open Community Search"
          className="flex h-full w-full items-center gap-2.5 rounded-md border border-slate-100 bg-zinc-50 p-2 dark:border-gray-700 dark:bg-zinc-900"
          onClick={() => {
            window.CommunitySearch.toggleWidget()
          }}
        >
          <div className="h-[17px] flex-shrink-0 flex-grow-0">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 16.25L12.4875 12.9875M8.25 5C10.3211 5 12 6.67893 12 8.75M14.25 8.75C14.25 12.0637 11.5637 14.75 8.25 14.75C4.93629 14.75 2.25 12.0637 2.25 8.75C2.25 5.43629 4.93629 2.75 8.25 2.75C11.5637 2.75 14.25 5.43629 14.25 8.75Z"
                className="stroke-gray-400"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="grow text-gray-400">Community search&hellip;</div>
          <div className="flex grow-0">
            <div className="mr-[3px] h-6 w-6 rounded border border-slate-100 bg-slate-50 p-1 text-gray-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-slate-300">
              ⌘
            </div>
            <div className="mr-[3px] h-6 w-6 rounded border border-slate-100 bg-slate-50 p-1 text-gray-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-slate-300">
              K
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
