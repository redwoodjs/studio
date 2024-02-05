import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react'
import type { InfoQuery, InfoQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<InfoQuery, InfoQueryVariables> = gql`
  query InfoQuery {
    infos: studioConfig {
      basePort
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

interface InfoItemProps {
  title: string
  info: string | number
}

const InfoItem = ({ title, info }: InfoItemProps) => {
  return (
    <div className="mt-4 space-y-4">
      <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {title}
      </h4>
      <p
        className={`text-tremor-default text-tremor-content dark:text-dark-tremor-content ${
          info ?? 'italic'
        }`}
      >
        {info ?? 'Not set'}
      </p>
    </div>
  )
}

export const Success = ({ infos }: CellSuccessProps<InfoQuery>) => {
  return (
    <TabGroup className="mt-6">
      <TabList className="mb-6">
        <Tab>General</Tab>
        <Tab>User Impersonation</Tab>
        <Tab>GraphQL Playground</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InfoItem title="Base Port" info={infos?.basePort} />
          <InfoItem title="Version" info={window.RW_STUDIO_VERSION} />
        </TabPanel>
        <TabPanel>
          <InfoItem
            title="Auth Provider"
            info={infos?.graphiql?.authImpersonation?.authProvider}
          />
          <InfoItem
            title="User ID"
            info={infos?.graphiql?.authImpersonation?.userId}
          />
          <InfoItem
            title="Email"
            info={infos?.graphiql?.authImpersonation?.email}
          />
          <InfoItem
            title="Roles"
            info={infos?.graphiql?.authImpersonation?.roles?.join(' ')}
          />
          <InfoItem
            title="JWT Secret"
            info={infos?.graphiql?.authImpersonation?.jwtSecret}
          />
        </TabPanel>
        <TabPanel>
          <InfoItem title="Endpoint" info={infos?.graphiql?.endpoint} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
