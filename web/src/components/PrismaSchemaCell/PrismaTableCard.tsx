import {
  Card,
  Title,
  Bold,
  Text,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow as TremorTableRow,
  TableCell,
} from '@tremor/react'

import { TableRow } from './prismaHelpers'

interface Props {
  data: TableRow
}

export const PrismaTableCard = ({ data }: Props) => {
  return (
    <Card>
      <Title>{data.name}</Title>
      <Table className="mt-5">
        <TableHead>
          <TremorTableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Format</TableHeaderCell>
            <TableHeaderCell>Relationship</TableHeaderCell>
          </TremorTableRow>
        </TableHead>
        <TableBody>
          {data?.fields?.map((field) => (
            <TremorTableRow key={field.name}>
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
            </TremorTableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
