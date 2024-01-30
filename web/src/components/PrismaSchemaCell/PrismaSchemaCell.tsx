import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react'
import type { FindPrismaSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'

import PrismaEntityRelationshipDiagram from './PrismaEntityRelationshipDiagram'
import PrismaModelList from './PrismaModelList'
import PrismaTableViews from './PrismaTableViews'

export const QUERY = gql`
  query FindPrismaSchemaQuery {
    prismaSchema {
      id
      schema
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  prismaSchema,
}: CellSuccessProps<FindPrismaSchemaQuery>) => {
  return (
    <TabGroup>
      <TabList className="mt-8">
        <Tab>Diagram</Tab>
        <Tab>Schema</Tab>
        <Tab>Details</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <PrismaEntityRelationshipDiagram prismaSchema={prismaSchema} />
        </TabPanel>
        <TabPanel>
          <PrismaTableViews prismaSchema={prismaSchema} />
        </TabPanel>
        <TabPanel>
          <PrismaModelList prismaSchema={prismaSchema} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
