import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react'
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

interface SettingItemProps {
  title: string
  setting: string | number
}

const SettingItem = ({ title, setting }: SettingItemProps) => {
  return (
    <div className="mt-4 space-y-4">
      <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {title}
      </h4>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {setting}
      </p>
    </div>
  )
}

export const Success = ({ settings }: CellSuccessProps<SettingsQuery>) => {
  return (
    <TabGroup className="mt-6">
      <TabList className="mb-6">
        <Tab>General</Tab>
        <Tab>User Impersonation</Tab>
        <Tab>GraphQL Playground</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SettingItem title="Base Port" setting={settings?.basePort} />
          <SettingItem title="Version" setting={window.RW_STUDIO_VERSION} />
        </TabPanel>
        <TabPanel>
          <SettingItem
            title="Auth Provider"
            setting={settings?.graphiql?.authImpersonation?.authProvider}
          />
          <SettingItem
            title="User ID"
            setting={settings?.graphiql?.authImpersonation?.userId}
          />
          <SettingItem
            title="Email"
            setting={settings?.graphiql?.authImpersonation?.email}
          />
          <SettingItem
            title="Roles"
            setting={
              settings?.graphiql?.authImpersonation?.roles?.join(' ') || ''
            }
          />
          <SettingItem
            title="JWT Secret"
            setting={settings?.graphiql?.authImpersonation?.jwtSecret}
          />
        </TabPanel>
        <TabPanel>
          <SettingItem
            title="Endpoint"
            setting={settings?.graphiql?.endpoint}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
