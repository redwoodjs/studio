import { Card, Flex, Text } from '@tremor/react'

import { routes } from '@redwoodjs/router'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

export const SpanLink = ({ id, name, type }) => {
  return (
    <Card className="w-full p-4">
      <Flex
        flexDirection="row"
        justifyContent="start"
        className="min-w-0 gap-4"
      >
        <div className="min-w-0 flex-grow">
          <Flex
            flexDirection="col"
            alignItems="start"
            justifyContent="start"
            className="gap-1"
          >
            <Text>{type.name}</Text>
            <Text>{name}</Text>
          </Flex>
        </div>
        <div>
          <LinkingIcon to={routes.opentelemetrySpan({ id })} />
        </div>
      </Flex>
    </Card>
  )
}
