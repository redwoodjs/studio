import { Flex } from '@tremor/react'

import { routes } from '@redwoodjs/router'

import { LinkingIcon } from '../LinkingIcon/LinkingIcon'

const numberFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const TraceTimeline = ({ trace }) => {
  const sortedSpans = [...trace.spans].sort((a, b) => {
    return a.startTimeNano - b.startTimeNano
  })
  const traceStart = BigInt.asUintN(63, BigInt(sortedSpans[0].startTimeNano))
  const traceEnd = BigInt.asUintN(
    63,
    BigInt(sortedSpans[sortedSpans.length - 1].endTimeNano)
  )
  const traceDuration = Number(traceEnd - traceStart)

  return (
    <Flex
      flexDirection="col"
      justifyContent="start"
      alignItems="start"
      className="gap-1"
    >
      {sortedSpans.map((span) => {
        const spanStart = BigInt.asUintN(63, BigInt(span.startTimeNano))
        const spanEnd = BigInt.asUintN(63, BigInt(span.endTimeNano))

        const startBasis =
          (Number(spanStart - traceStart) / traceDuration) * 99.999
        const duringBasis =
          (Number(spanEnd - spanStart) / traceDuration) * 99.999
        const endBasis = (Number(traceEnd - spanEnd) / traceDuration) * 99.999

        const durationText = `${numberFormatter.format(
          Number(spanEnd - spanStart) / 1_000_000
        )}ms`
        const maxBasis = Math.max(startBasis, duringBasis, endBasis)
        const durationTextAtEnd = maxBasis === endBasis
        const durationTextAtDuring = maxBasis === duringBasis
        const durationTextAtStart = maxBasis === startBasis

        return (
          <Flex
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
            className="min-w-0 gap-1"
            key={span.spanId}
          >
            <span className="flex basis-1/5 overflow-x-scroll border-r-[1px] border-tremor-content text-sm dark:border-dark-tremor-content">
              <LinkingIcon to={routes.opentelemetrySpan({ id: span.spanId })} />
              <span className="whitespace-nowrap pl-1 text-tremor-content dark:text-dark-tremor-content">
                {span.name}
              </span>
            </span>
            <span className="flex flex-grow basis-4/5 flex-row">
              <span
                className="text-sm"
                style={{
                  flexBasis: `${startBasis.toFixed(3)}%`,
                  flexGrow: 0,
                  flexShrink: 0,
                  textAlign: 'right',
                }}
              >
                {durationTextAtStart ? (
                  <span className="pr-1 text-tremor-content dark:text-dark-tremor-content">
                    {durationText}
                  </span>
                ) : (
                  ''
                )}
              </span>
              <span
                className="bg-tremor-brand-subtle text-sm dark:bg-dark-tremor-brand-subtle"
                style={{
                  flexBasis: `${duringBasis.toFixed(3)}%`,
                  flexGrow: 0,
                  flexShrink: 0,
                }}
              >
                {durationTextAtDuring ? (
                  <span className="pl-1 text-tremor-content-inverted dark:text-dark-tremor-content-inverted">
                    {durationText}
                  </span>
                ) : (
                  ''
                )}
              </span>
              <span
                className="text-sm"
                style={{
                  flexBasis: `${endBasis.toFixed(3)}%`,
                  flexGrow: 0,
                  flexShrink: 0,
                }}
              >
                {durationTextAtEnd ? (
                  <span className="pl-1 text-tremor-content dark:text-dark-tremor-content">
                    {durationText}
                  </span>
                ) : (
                  ''
                )}
              </span>
            </span>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default TraceTimeline
