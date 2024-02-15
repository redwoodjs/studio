import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react'
import type { InfoQuery, InfoQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<InfoQuery, InfoQueryVariables> = gql`
  query InfoQuery {
    studioInfo: studioConfig {
      id
      basePort
      graphiql {
        id
        authImpersonation {
          id
          authProvider
          userId
          email
          # TODO: Add support for roles in generated auth headers
          # roles
          jwtSecret
        }
      }
    }
    projectInfo: userProjectConfig {
      ssr {
        id
        enabled {
          status
          message
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
  value: string | number | boolean
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

export const Success = ({
  studioInfo,
  projectInfo,
}: CellSuccessProps<InfoQuery>) => {
  return (
    <TabGroup className="mt-6">
      <TabList className="mb-6">
        <Tab>General</Tab>
        <Tab>User Impersonation</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InfoItem title="Base Port" value={studioInfo?.basePort} />
          <InfoItem title="Version" value={window.RW_STUDIO_VERSION} />
          <InfoItem title="SSR" value={projectInfo?.ssr?.enabled.message} />
        </TabPanel>
        <TabPanel>
          <InfoItem
            title="Auth Provider"
            value={studioInfo?.graphiql?.authImpersonation?.authProvider}
          />
          <InfoItem
            title="User ID"
            value={studioInfo?.graphiql?.authImpersonation?.userId}
          />
          <InfoItem
            title="Email"
            value={studioInfo?.graphiql?.authImpersonation?.email}
          />
          {/* TODO: Add support for roles in generated auth headers */}
          {/* <InfoItem
            title="Roles"
            info={infos?.graphiql?.authImpersonation?.roles?.join(' ')}
          /> */}
          <InfoItem
            title="JWT Secret"
            value={studioInfo?.graphiql?.authImpersonation?.jwtSecret}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
