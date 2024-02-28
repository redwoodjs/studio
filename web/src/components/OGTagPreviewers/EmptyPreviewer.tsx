import { Flex, Text } from '@tremor/react'

export const EmptyPreviewer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="h-32 w-full rounded-tremor-default border border-dashed border-tremor-border dark:border-dark-tremor-border"
    >
      <Text className="text-tremor-content dark:text-dark-tremor-content">
        Unable to preview
      </Text>
    </Flex>
  )
}
