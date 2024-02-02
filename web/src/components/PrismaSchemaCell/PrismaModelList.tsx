import { BarList, Bold, Card, Flex, Text, Title } from '@tremor/react'
import type { PrismaSchema } from 'types/graphql'

import { extractNodesAndEdges } from './prismaHelpers'

interface Props {
  prismaSchema: PrismaSchema
}

export const PrismaModelList = ({ prismaSchema }: Props) => {
  const { nodes } = extractNodesAndEdges(prismaSchema.schema)

  const data = nodes.map((node) => {
    const { name, fieldCount: value } = node.data
    return {
      name,
      value,
    }
  })

  return (
    <Card className="w-full">
      <Title>Models</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Name</Bold>
        </Text>
        <Text>
          <Bold>Fields</Bold>
        </Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  )
}
