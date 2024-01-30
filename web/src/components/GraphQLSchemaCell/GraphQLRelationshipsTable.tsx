import {
  Bold,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from '@tremor/react'
import type { Relationship } from 'types/graphql'

export const GraphQLRelationshipsTable = ({
  relationships,
}: {
  relationships: Relationship[]
}) => (
  <Card>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Relationship</TableHeaderCell>
          <TableHeaderCell>From</TableHeaderCell>
          <TableHeaderCell>To</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {relationships.map((relationship, index) => (
          <TableRow
            key={`${relationship.source}-${relationship.source}-${relationship.label}=${index}`}
          >
            <TableCell>
              <Bold>{relationship.label}</Bold>
            </TableCell>
            <TableCell>
              <Text>{relationship.source}</Text>
            </TableCell>
            <TableCell>
              <Text>{relationship.target}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
)
