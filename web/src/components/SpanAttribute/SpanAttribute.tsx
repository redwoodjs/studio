import { Flex, Text } from '@tremor/react'

export const SpanAttribute = ({
  keyName: key,
  value,
  type: _type,
}: {
  keyName: string
  value: any
  type: string
}) => {
  let valueComp = (
    <pre className="text-sm text-tremor-content dark:text-dark-tremor-content">
      {value}
    </pre>
  )

  try {
    const parsed = JSON.parse(value)
    valueComp = (
      <pre className="text-sm text-tremor-content dark:text-dark-tremor-content">
        {JSON.stringify(parsed, undefined, 2)}
      </pre>
    )
  } catch (_error) {
    // We don't care
  }

  return (
    <Flex
      flexDirection="col"
      className="gap-1"
      alignItems="start"
      justifyContent="start"
    >
      <Text>{key}</Text>
      {valueComp}
    </Flex>
  )
}
