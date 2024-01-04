import { Text, Metric, Flex } from '@tremor/react'
import type {
  FindMailCountQuery,
  FindMailCountQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMailCountQuery @live {
    mailAPICount
    mailSMTPCount
    mailComponentCount
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMailCountQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  mailAPICount,
  mailSMTPCount,
  mailComponentCount,
}: CellSuccessProps<FindMailCountQuery, FindMailCountQueryVariables>) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="evenly"
      alignItems="start"
      className="gap-2 text-center"
    >
      <div>
        <Text>SMTP</Text>
        <Metric>{mailSMTPCount}</Metric>
      </div>
      <div>
        <Text>API</Text>
        <Metric>{mailAPICount}</Metric>
      </div>
      <div>
        <Text>Components</Text>
        <Metric>{mailComponentCount}</Metric>
      </div>
    </Flex>
  )
}
