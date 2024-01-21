import {
  Card,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Bold,
} from '@tremor/react'
import type { SQLStatementsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const beforeQuery = (props) => {
  return {
    variables: props,
    pollInterval: 5000,
    fetchPolicy: 'cache-and-network',
  }
}

export const QUERY = gql`
  query SQLStatementsQuery {
    sqlStatements: sqlStatementSpans {
      id
      startedAt
      endedAt
      durationMs
      durationSec
      attributeKey
      attributeValue
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sqlStatements,
}: CellSuccessProps<SQLStatementsQuery>) => {
  return (
    <Card>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>SQL Statement</TableHeaderCell>
            <TableHeaderCell>Started At</TableHeaderCell>
            <TableHeaderCell>Ended At</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Duration (msec)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Duration (s)
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sqlStatements.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="text-wrap max-w-32">
                    <Bold className="text-wrap max-w-32">
                      {item.attributeValue}
                    </Bold>
                  </div>
                </TableCell>
                <TableCell>{item.startedAt}</TableCell>
                <TableCell>{item.endedAt}</TableCell>
                <TableCell className="text-right">{item.durationMs}</TableCell>
                <TableCell className="text-right">{item.durationSec}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}
