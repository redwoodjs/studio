import { BarList, Card, Flex, Metric, Text } from '@tremor/react'
import type {
  FindMailCountQuery,
  FindMailCountQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChartHeading from 'src/components/Charts/ChartHeading'
import { EnvelopeIcon } from 'src/icons/Icons'

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
  const data = [
    {
      name: 'Third-party API',
      value: mailAPICount,
    },
    {
      name: 'SMTP/Nodemailer',
      value: mailSMTPCount,
    },
  ]

  return (
    <>
      <Card>
        <ChartHeading
          caption="Mailer Stats"
          icon={EnvelopeIcon}
          tooltip="Mailer Stats"
        />

        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="mt-6 space-x-2"
        >
          <Metric>{mailComponentCount}</Metric>
          <Text>React Email Components</Text>
        </Flex>

        <Flex className="mt-6">
          <Text>Transport</Text>
          <Text className="text-right">Sent</Text>
        </Flex>
        <BarList data={data} className="mt-2" />
      </Card>
    </>
  )
}
