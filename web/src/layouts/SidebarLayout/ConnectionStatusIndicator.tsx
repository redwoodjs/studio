import { useQuery } from '@apollo/client'
import { GetConnectionStatus } from 'types/graphql'

const CONNECTION_STATUS_QUERY = gql`
  query GetConnectionStatus @live {
    connectionStatus {
      id
      developmentServer
    }
  }
`

export const ConnectionStatusIndicator = () => {
  const {
    data: connectionStatusData,
    loading: connectionStatusLoading,
    error: connectionStatusError,
  } = useQuery<GetConnectionStatus>(CONNECTION_STATUS_QUERY)

  const connectionStatus =
    connectionStatusLoading ||
    connectionStatusError ||
    connectionStatusData === undefined
      ? 'unknown'
      : connectionStatusData.connectionStatus.developmentServer
      ? 'connected'
      : 'disconnected'

  const bgColorDark =
    connectionStatus === 'connected'
      ? 'bg-green-500'
      : connectionStatus === 'disconnected'
      ? 'bg-red-500'
      : 'bg-yellow-500'
  const bgColorLight =
    connectionStatus === 'connected'
      ? 'bg-green-400'
      : connectionStatus === 'disconnected'
      ? 'bg-red-400'
      : 'bg-yellow-400'

  return (
    <div className="group flex w-full grow items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 dark:text-gray-600">
      <span className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgColorLight} opacity-75`}
        ></span>
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${bgColorDark}`}
        ></span>
      </span>
      <span>
        {connectionStatus === 'connected'
          ? 'Connected'
          : connectionStatus === 'disconnected'
          ? 'Disconnected'
          : 'Please Reload'}
      </span>
    </div>
  )
}
