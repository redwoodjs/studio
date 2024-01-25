import type { FindPrismaSchemaQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import 'reactflow/dist/style.css'

import PrismaEntityRelationshipDiagram from './PrismaEntityRelationshipDiagram'
import PrismaModelList from './PrismaModelList'

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
    <>
      <PrismaEntityRelationshipDiagram prismaSchema={prismaSchema} />
      <PrismaModelList prismaSchema={prismaSchema} />
    </>
  )
}
