import { Grid, Col } from '@tremor/react'
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
    <>
      <Grid numItems={2} numItemsSm={1} numItemsLg={3} className="mb-4 gap-4">
        <Col numColSpanLg={2}>
          <PrismaEntityRelationshipDiagram prismaSchema={prismaSchema} />
        </Col>
        <Col numColSpanLg={1}>
          <PrismaModelList prismaSchema={prismaSchema} />
        </Col>
      </Grid>

      <PrismaTableViews prismaSchema={prismaSchema} />
    </>
  )
}
