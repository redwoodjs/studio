import type { GraphiqlQuery } from 'types/graphql'

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

const API_PORT = window.RW_STUDIO_API_PORT

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="font-bold text-tremor-brand dark:text-dark-tremor-brand">Error: {error?.message}</div>
)

export const Success = ({
  generateAuthHeaders,
}: CellSuccessProps<GraphiqlQuery>) => {
  const headers = {
    'auth-provider': generateAuthHeaders?.authProvider,
    authorization: generateAuthHeaders?.authorization,
    cookie: generateAuthHeaders?.cookie,
  }

  return (
    <RedwoodGraphiQL
      headers={
        headers['auth-provider']
          ? JSON.stringify(headers, undefined, 2)
          : undefined
      }
      endpoint={`http://localhost:${API_PORT}/proxies/graphql`}
      defaultQuery={DEFAULT_QUERY}
    />
  )
}
