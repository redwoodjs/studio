import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import type { SpansByAttributeKeyAndType } from 'types/graphql'

import { routes } from '@redwoodjs/router'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

type Props = {
  details: Pick<
    SpansByAttributeKeyAndType,
    | 'id'
    | 'spanId'
    | 'startedAt'
    | 'attributeValue'
    | 'durationMs'
    | 'durationSec'
  >[]
  caption: string
}

const SpansDetailsTable = ({ details, caption }: Props) => {
  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>{caption}</TableHeaderCell>
          <TableHeaderCell className="max-w-96">Operation</TableHeaderCell>
          <TableHeaderCell>Ago</TableHeaderCell>
          <TableHeaderCell className="text-right">
            Duration (msec)
          </TableHeaderCell>
          <TableHeaderCell className="text-right">Duration (s)</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {details.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>
                <LinkingIcon
                  to={routes.opentelemetrySpan({ id: item.spanId })}
                />
              </TableCell>
              <TableCell className="!text-wrap max-w-96 !whitespace-normal !break-all">
                {item.attributeValue}
              </TableCell>
              <TableCell>
                {formatDistanceToNow(parseISO(item.startedAt), {
                  includeSeconds: true,
                  addSuffix: true,
                })}
              </TableCell>

              <TableCell className="text-right">{item.durationMs}</TableCell>
              <TableCell className="text-right">{item.durationSec}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default SpansDetailsTable
