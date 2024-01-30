import type { SettingsQuery, SettingsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  SettingsQuery,
  SettingsQueryVariables
> = gql`
  query SettingsQuery {
    settings: studioConfig {
      graphiql {
        endpoint
        authImpersonation {
          authProvider
          userId
          email
          roles
          jwtSecret
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ settings }: CellSuccessProps<SettingsQuery>) => {
  return (
    <div className="text-white">
      {Object.entries(settings).map(([key, value]) => (
        <div key={key}>
          {key}: {JSON.stringify(value)}
        </div>
      ))}
    </div>
  )
}
