import {
  Grid,
  Col,
  Card,
  Title,
  Bold,
  Text,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from '@tremor/react'
import type { PrismaSchema } from 'types/graphql'

import { getTableDataForSchema } from './prismaHelpers'

const TableCard = ({ data }: { data: any }) => {
  return (
    <Card>
      <Title>{data.name}</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Format</TableHeaderCell>
            <TableHeaderCell>Relationship</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.fields?.map((field) => (
            <TableRow key={field.name}>
              <TableCell>
                <Bold>{field.name}</Bold>
              </TableCell>
              <TableCell>
                <Text>{field.type}</Text>
              </TableCell>
              <TableCell>
                <Text>{field.format}</Text>
              </TableCell>
              <TableCell>
                <Text>{field.relatedModel}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

const PrismaTableViews = ({ prismaSchema }: { prismaSchema: PrismaSchema }) => {
  const tableData = getTableDataForSchema(prismaSchema.schema)
  console.log(tableData)

  return (
    <Grid numItems={2} numItemsSm={1} numItemsLg={2} className="gap-4">
      {tableData.map((table) => (
        <Col key={table.name}>
          <TableCard key={table.name} data={table} />
        </Col>
      ))}
    </Grid>
  )
}

export default PrismaTableViews
