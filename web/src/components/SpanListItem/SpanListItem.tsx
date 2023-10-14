import { Card, Text } from '@tremor/react'

const SpanListItem = (data) => {
  return (
    <Card className="w-full">
      <Text>
        <pre>
          <code>{JSON.stringify(data, undefined, 2)}</code>
        </pre>
      </Text>
    </Card>
  )
}

export default SpanListItem
