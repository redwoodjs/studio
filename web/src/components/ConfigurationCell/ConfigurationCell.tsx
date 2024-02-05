import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react'
import type {
  ConfigurationQuery,
  ConfigurationQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  ConfigurationQuery,
  ConfigurationQueryVariables
> = gql`
  query ConfigurationQuery {
    configurations: studioConfig {
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

interface ConfigurationItemProps {
  title: string
  configuration: string | number
}

const ConfigurationItem = ({
  title,
  configuration,
}: ConfigurationItemProps) => {
  return (
    <div className="mt-4 space-y-4">
      <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {title}
      </h4>
      <p
        className={`text-tremor-default text-tremor-content dark:text-dark-tremor-content ${
          configuration ?? 'italic'
        }`}
      >
        {configuration ?? 'Not set'}
      </p>
    </div>
  )
}

export const Success = ({
  configurations,
}: CellSuccessProps<ConfigurationQuery>) => {
  return (
    <TabGroup className="mt-6">
      <TabList className="mb-6">
        <Tab>General</Tab>
        <Tab>User Impersonation</Tab>
        <Tab>GraphQL Playground</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ConfigurationItem
            title="Base Port"
            configuration={configurations?.basePort}
          />
          <ConfigurationItem
            title="Version"
            configuration={window.RW_STUDIO_VERSION}
          />
        </TabPanel>
        <TabPanel>
          <ConfigurationItem
            title="Auth Provider"
            configuration={
              configurations?.graphiql?.authImpersonation?.authProvider
            }
          />
          <ConfigurationItem
            title="User ID"
            configuration={configurations?.graphiql?.authImpersonation?.userId}
          />
          <ConfigurationItem
            title="Email"
            configuration={configurations?.graphiql?.authImpersonation?.email}
          />
          <ConfigurationItem
            title="Roles"
            configuration={configurations?.graphiql?.authImpersonation?.roles?.join(
              ' '
            )}
          />
          <ConfigurationItem
            title="JWT Secret"
            configuration={
              configurations?.graphiql?.authImpersonation?.jwtSecret
            }
          />
        </TabPanel>
        <TabPanel>
          <ConfigurationItem
            title="Endpoint"
            configuration={configurations?.graphiql?.endpoint}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
