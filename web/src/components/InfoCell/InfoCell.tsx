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
        authImpersonation {
          authProvider
          userId
          email
          # TODO: Add support for roles in generated auth headers
          # roles
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
  value: string | number
}

const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <div className="mt-4 space-y-4">
      <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {title}
      </h4>
      <p
        className={`text-tremor-default text-tremor-content dark:text-dark-tremor-content ${
          value === undefined || value === null ? 'italic' : ''
        }`}
      >
        {value ?? 'Not set'}
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
      </TabList>
      <TabPanels>
        <TabPanel>
          <InfoItem title="Base Port" value={infos?.basePort} />
          <InfoItem title="Version" value={window.RW_STUDIO_VERSION} />
        </TabPanel>
        <TabPanel>
          <InfoItem
            title="Auth Provider"
            value={infos?.graphiql?.authImpersonation?.authProvider}
          />
          <InfoItem
            title="User ID"
            value={infos?.graphiql?.authImpersonation?.userId}
          />
          <InfoItem
            title="Email"
            value={infos?.graphiql?.authImpersonation?.email}
          />
          {/* TODO: Add support for roles in generated auth headers */}
          {/* <InfoItem
            title="Roles"
            info={infos?.graphiql?.authImpersonation?.roles?.join(' ')}
          /> */}
          <InfoItem
            title="JWT Secret"
            value={infos?.graphiql?.authImpersonation?.jwtSecret}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
