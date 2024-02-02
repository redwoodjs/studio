import {
  Title,
  Tab,
  TabGroup,
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
        <Tab>Schema</Tab>
        <Tab>Details</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <GraphQLSchemaDiagram schema={schema} />
        </TabPanel>
        <TabPanel>
          <GraphQLSchemaTables schema={schema} />
        </TabPanel>
        <TabPanel>
          <GraphQLRelationshipsTable relationships={schema.relationships} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
