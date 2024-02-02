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
      inMemory
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
  value: string | number
}

const SettingItem = ({ title, value }: SettingItemProps) => {
  return (
    <div className="mt-4 space-y-4">
      <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {title}
      </h4>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {value}
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
          <SettingItem
            props={{ title: 'Base Port', value: settings?.basePort }}
          />
          <SettingItem
            props={{
              title: 'In Memory Database',
              value: settings?.inMemory ? 'Yes' : 'No',
            }}
          />
          <SettingItem
            props={{ title: 'Version', value: window.RW_STUDIO_VERSION }}
          />
        </TabPanel>
        <TabPanel>
          <SettingItem
            props={{
              title: 'Auth Provider',
              value: settings?.graphiql?.authImpersonation?.authProvider,
            }}
          />
          <SettingItem
            props={{
              title: 'User ID',
              value: settings?.graphiql?.authImpersonation?.userId,
            }}
          />
          <SettingItem
            props={{
              title: 'Email',
              value: settings?.graphiql?.authImpersonation?.email,
            }}
          />
          <SettingItem
            props={{
              title: 'Roles',
              value:
                settings?.graphiql?.authImpersonation?.roles?.join(', ') || '',
            }}
          />
          <SettingItem
            props={{
              title: 'JWT Secret',
              value: settings?.graphiql?.authImpersonation?.jwtSecret,
            }}
          />
        </TabPanel>
        <TabPanel>
          <SettingItem
            props={{
              title: 'Endpoint',
              value: settings?.graphiql?.endpoint,
            }}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
