import { CubeTransparentIcon } from '@heroicons/react/outline'
import { Badge, Button, Card, Divider, Flex, Text, Title } from '@tremor/react'

import { Link, routes } from '@redwoodjs/router'

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

const TraceListItem = ({ id, spans }) => {
  let startTimeNano = BigInt(Number.MAX_VALUE)
  let endTimeNano = BigInt(0)
  let rootSpan = null
  let statusCode = 0
  const types = new Map<
    string,
    { name: string; colour: string; count: number }
  >()
  for (const span of spans) {
    const start = BigInt(span.startTimeNano)
    const end = BigInt(span.endTimeNano)
    if (start < startTimeNano) {
      startTimeNano = start
      rootSpan = span
    }
    if (end > endTimeNano) {
      endTimeNano = end
    }
    if (span.statusCode > statusCode) {
      statusCode = span.statusCode
    }
    const type = types.get(span.type.name)
    if (type) {
      type.count++
    } else {
      types.set(span.type.name, {
        name: span.type.name,
        colour: span.type.colour,
        count: 1,
      })
    }
  }
  const duration = Number((endTimeNano - startTimeNano) / 1_000n) / 1_000
  const name = rootSpan.name ?? 'Unknown'
  const brief = rootSpan.brief ?? null
  const typesArray = Array.from(types.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

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
                <Title>{name}</Title>
                <Flex
                  flexDirection="row"
                  justifyContent="start"
                  className="gap-2"
                >
                  <Text>{id}</Text>
                  {brief ? (
                    <>
                      <Text>|</Text>
                      <Text className="truncate">{brief}</Text>
                    </>
                  ) : null}
                </Flex>
              </Flex>
              <div>
                <StatusBadge statusCode={statusCode} />
              </div>
            </Flex>
            <Divider className="my-2" />
            <Flex
              flexDirection="row"
              justifyContent="between"
              className="min-w-0"
            >
              <div className="flex-grow">
                <Flex
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="start"
                  className="min-w-0 gap-2 overflow-x-scroll"
                >
                  {typesArray.map((type) => (
                    <Badge
                      key={type.name}
                      style={{
                        backgroundColor: `#${type.colour}`,
                        color: '#fff',
                      }}
                    >
                      {type.count}x {type.name}
                    </Badge>
                  ))}
                </Flex>
              </div>
              <Flex flexDirection="row" justifyContent="end">
                <Text>
                  {new Date(
                    Number(startTimeNano / 1_000_000n)
                  ).toLocaleString()}
                  {' | '}
                  {duration.toFixed(2)} ms
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
        <div>
          <Flex
            flexDirection="col"
            justifyContent="start"
            alignItems="start"
            className="gap-2"
          >
            <Link to={routes.opentelemetryTrace({ id })}>
              <Button className="p-2">
                <CubeTransparentIcon
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </Flex>
        </div>
      </Flex>
    </Card>
  )
}

export default TraceListItem
