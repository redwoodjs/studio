import type { GenerateAuthHeadersQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { RedwoodGraphiQL } from 'src/components/RedwoodGraphiQL'

export const QUERY = gql`
  query GraphiqlQuery {
    generateAuthHeaders {
      authProvider
      cookie
      authorization
    }
  }
`

const DEFAULT_QUERY = `{
  redwood {
    version
  }
}`

const PORT = window.RW_STUDIO_BASE_PORT

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  generateAuthHeaders,
}: CellSuccessProps<GenerateAuthHeadersQuery>) => {
  const headers = {
    'auth-provider': generateAuthHeaders?.authProvider,
    authorization: generateAuthHeaders?.authorization,
    cookie: generateAuthHeaders?.cookie,
  }

  return (
    <RedwoodGraphiQL
      headers={headers['auth-provider'] ? JSON.stringify(headers) : undefined}
      endpoint={`http://localhost:${PORT}/proxies/graphql`}
      defaultQuery={DEFAULT_QUERY}
    />
  )
}
