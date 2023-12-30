import { CubeIcon, CubeTransparentIcon } from '@heroicons/react/outline'
import { Badge, Button, Card, Divider, Flex, Text, Title } from '@tremor/react'

const StatusBadge = ({ statusCode }: { statusCode: number }) => {
  // https://opentelemetry.io/docs/specs/otel/trace/api/#set-status
  if (statusCode === 0) {
    return <Badge color="gray">Unset</Badge>
  }
  if (statusCode === 1) {
    return <Badge color="green">OK</Badge>
  }
  if (statusCode === 2) {
    return <Badge color="red">Error</Badge>
  }
  return <Badge color="orange">Invalid</Badge>
}

const SpanListItem = ({ data }) => {
  const duration =
    Number((BigInt(data.endTimeNano) - BigInt(data.startTimeNano)) / 1_000n) /
    1_000
  return (
    <Card className="w-full">
      <Flex
        flexDirection="row"
        justifyContent="start"
        className="min-w-0 gap-4"
      >
        <div className="min-w-0 flex-grow">
          <Flex flexDirection="col">
            <Flex flexDirection="row" justifyContent="between">
              <Flex
                flexDirection="col"
                alignItems="start"
                className="min-w-0 flex-grow"
              >
                <Title>{data.name}</Title>
                <Flex
                  flexDirection="row"
                  justifyContent="start"
                  className="gap-2"
                >
                  <Text>{data.spanId}</Text>
                  {data.brief ? (
                    <>
                      <Text>|</Text>
                      <Text className="truncate">{data.brief}</Text>
                    </>
                  ) : null}
                </Flex>
              </Flex>
              <div>
                <StatusBadge statusCode={data.statusCode} />
              </div>
            </Flex>
            <Divider className="my-2" />
            <Flex flexDirection="row" justifyContent="between">
              <div>
                <Badge>{data.type.name}</Badge>
              </div>
              <div>
                <Text>
                  {new Date(data.startTimeNano / 1_000_000).toLocaleString()}
                  {' | '}
                  {duration.toFixed(2)} ms
                </Text>
              </div>
            </Flex>
          </Flex>
        </div>
        <div>
          <Flex flexDirection="col" className="gap-2">
            <Button className="p-2">
              <CubeTransparentIcon
                className="h-6 w-6 shrink-0"
                aria-hidden="true"
              />
            </Button>
            <Button className="p-2">
              <CubeIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            </Button>
          </Flex>
        </div>
      </Flex>
    </Card>
  )
}

export default SpanListItem
