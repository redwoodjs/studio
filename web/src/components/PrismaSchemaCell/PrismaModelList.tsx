import { BarList, Bold, Card, Flex, Text, Title } from '@tremor/react'
import type { PrismaSchema } from 'types/graphql'

import { extractNodesAndEdges } from './prismaHelpers'

const PrismaModelList = ({ prismaSchema }: { prismaSchema: PrismaSchema }) => {
  const { nodes } = extractNodesAndEdges(prismaSchema.schema)

  const data = nodes.map((node) => {
    const { name, fieldCount: value } = node.data
    return {
      name,
      value,
    }
  })

  return (
    <Card className="max-w-lg">
      <Title>Prisma Models</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Model</Bold>
        </Text>
        <Text>
          <Bold>Fields</Bold>
        </Text>
      </Flex>
      <BarList data={data} className="mt-2" />
    </Card>
  )
}

export default PrismaModelList
