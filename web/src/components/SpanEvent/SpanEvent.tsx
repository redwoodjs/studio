import { Card, Flex, List, ListItem, Text } from '@tremor/react'

import { SpanAttribute } from '../SpanAttribute/SpanAttribute'

export const SpanEvent = ({
  name,
  startTimeNano,
  attributes,
}: {
  name: string
  startTimeNano: string
  attributes: any[]
}) => {
  return (
    <Card className="w-full p-4">
      <Flex
        flexDirection="col"
        justifyContent="start"
        alignItems="start"
        className="min-h-0"
      >
        <List>
          <ListItem>
            <Text>Name</Text>
            <Text>{name}</Text>
          </ListItem>
          <ListItem>
            <Text>Start (ns)</Text>
            <Text>{startTimeNano}</Text>
          </ListItem>
          {attributes.length > 0 ? (
            <ListItem>
              <Text>Attributes</Text>
            </ListItem>
          ) : null}
        </List>
        <div className="space-y-2">
          {attributes.map(({ key, value, type }) => {
            return (
              <SpanAttribute
                key={key}
                keyName={key}
                value={value}
                type={type}
              />
            )
          })}
        </div>
      </Flex>
    </Card>
  )
}
