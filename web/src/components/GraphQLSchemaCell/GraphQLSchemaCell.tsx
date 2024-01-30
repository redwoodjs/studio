import {
  Title,
  TabGroup,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@tremor/react'
import type { FindGraphQLSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { GraphQLRelationshipsTable } from './GraphQLRelationshipsTable'
import { GraphQLSchemaDiagram } from './GraphQLSchemaDiagram'
import { GraphQLSchemaTables } from './GraphQLSchemaTables'

export const QUERY = gql`
  query FindGraphQLSchemaQuery {
    schema: graphqlSchema {
      id
      definitions
      relationships {
        source
        target
        label
      }
    }
  }
`

export const Loading = () => <Title>Loading...</Title>

export const Empty = () => <Title>Empty</Title>

export const Failure = ({ error }: CellFailureProps) => (
  <Title>Error: {error?.message}</Title>
)

export const Success = ({
  schema,
}: CellSuccessProps<FindGraphQLSchemaQuery>) => {
  return (
    <TabGroup>
      <TabList className="mt-8">
        <Tab>Diagram</Tab>
        <Tab>Details</Tab>
        <Tab>Relationships</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="h-[640px] w-full py-2">
            <GraphQLSchemaDiagram schema={schema} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="py-2">
            <GraphQLSchemaTables schema={schema} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="py-2">
            <GraphQLRelationshipsTable relationships={schema.relationships} />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
