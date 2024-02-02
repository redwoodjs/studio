import { Grid, Col } from '@tremor/react'
import type { PrismaSchema } from 'types/graphql'

import { getTableDataForSchema } from './prismaHelpers'
import { PrismaTableCard } from './PrismaTableCard'

interface PrismaTableViewsProps {
  prismaSchema: PrismaSchema
}

export const PrismaTableViews = ({ prismaSchema }: PrismaTableViewsProps) => {
  const tableData = getTableDataForSchema(prismaSchema.schema)

  return (
    <Grid numItems={2} numItemsSm={1} numItemsLg={2} className="gap-4">
      {tableData.map((table) => (
        <Col key={table.name}>
          <PrismaTableCard key={table.name} data={table} />
        </Col>
      ))}
    </Grid>
  )
}
