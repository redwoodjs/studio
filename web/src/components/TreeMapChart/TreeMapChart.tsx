import { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'

const spanDuration = (span) => {
  const startTime = BigInt(span.startTimeNano)
  const endTime = BigInt(span.endTimeNano)
  return Number(endTime - startTime)
}

const getChildSpans = (span, trace) => {
  const children = []
  for (const childSpan of trace.spans) {
    if (childSpan.parentId === span.spanId) {
      children.push(childSpan)
      children.push(...getChildSpans(childSpan, trace))
    }
  }
  return children
}

const spanSelfDuration = (span, trace) => {
  const duration = spanDuration(span)
  const children = getChildSpans(span, trace)
  const selfDuration =
    duration -
    children.reduce((acc, child) => {
      return acc + spanDuration(child)
    }, 0)
  return selfDuration
}

const TreeMapChart = ({ trace }) => {
  const spanData = [
    {
      data: trace.spans.map((span) => {
        return {
          x: span.name,
          y: spanSelfDuration(span, trace),
        }
      }),
    },
  ]

  const options: ApexOptions = {
    legend: {
      show: false,
    },
  }

  return (
    <div className="h-[50vh] max-h-[50vh] min-h-[50vh] w-full min-w-full max-w-full">
      <Chart
        options={options}
        series={spanData}
        type="treemap"
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default TreeMapChart
