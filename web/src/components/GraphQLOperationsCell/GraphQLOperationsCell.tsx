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
import type { GraphQLOperationsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
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
  query GraphQLOperationsQuery {
    graphQlOperations: graphQLOperationSpans {
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
  <>
    <Card>
      <Subtitle>Recent GraphQL Operations</Subtitle>
      <Bold>No recent records.</Bold>
    </Card>
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  graphQlOperations,
}: CellSuccessProps<GraphQLOperationsQuery>) => {
  return (
    <Card>
      <Subtitle>Recent GraphQL Operations</Subtitle>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>Operation</TableHeaderCell>
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
          {graphQlOperations.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <LinkingIcon
                    to={routes.opentelemetrySpan({ id: item.spanId })}
                  />
                </TableCell>
                <TableCell className="text-wrap max-w-32">
                  {item.attributeValue}
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
