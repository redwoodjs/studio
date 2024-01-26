import {
  Card,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Bold,
  Subtitle,
} from '@tremor/react'
import type { SQLStatementsQuery } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

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
      spanId
      startedAt
      endedAt
      durationMs
      durationSec
      attributeKey
      attributeValue
    }
  }
`

export const Loading = () => <Subtitle>Loading...</Subtitle>

export const Empty = () => (
  <Card>
    <Subtitle>Recent GraphQL Operations</Subtitle>
    <Bold>No recent records.</Bold>
  </Card>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sqlStatements,
}: CellSuccessProps<SQLStatementsQuery>) => {
  return (
    <Card>
      <Subtitle>Recent SQL Statements</Subtitle>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
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
                  <LinkingIcon
                    to={routes.opentelemetrySpan({ id: item.spanId })}
                  />
                </TableCell>
                <TableCell>
                  <Bold>{item.attributeValue}</Bold>
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
