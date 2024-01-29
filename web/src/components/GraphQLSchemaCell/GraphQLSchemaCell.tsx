import { Title } from '@tremor/react'
import type { FindGraphQLSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { GraphQLRelationshipsTable } from './GraphQLRelationshipsTable'
import { GraphQLSchemaDiagram } from './GraphQLSchemaDiagram'

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
    <div className="space-y-12">
      <div className="h-[640px] w-full py-2">
        <GraphQLSchemaDiagram schema={schema} />
      </div>

      <div className="py-2">
        <GraphQLRelationshipsTable relationships={schema.relationships} />
      </div>
    </div>
  )
}
