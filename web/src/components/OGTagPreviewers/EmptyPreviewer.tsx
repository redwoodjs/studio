import { Flex, Text } from '@tremor/react'

export const EmptyPreviewer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="h-32 w-full space-y-2 rounded-tremor-default border border-dashed border-tremor-border dark:border-dark-tremor-border"
      flexDirection="col"
    >
      <Text className="font-bold text-tremor-content dark:text-dark-tremor-content">
        Unable to preview.
      </Text>
      <Text className="text-tremor-content dark:text-dark-tremor-content">
        Please see audit for details.
      </Text>
    </Flex>
  )
}
