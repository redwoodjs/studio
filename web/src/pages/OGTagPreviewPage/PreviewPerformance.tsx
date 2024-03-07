import { Card } from '@tremor/react'
import type { PerformanceTiming } from 'types/graphql'

interface Props {
  performanceTiming: PerformanceTiming
}

interface StatProps {
  caption: string
  timing: number
  color?: string
}

const Stat = ({ caption, timing, color = 'bg-violet-500' }: StatProps) => {
  return (
    <Card>
      <div className="flex space-x-3">
        <div className={`w-1 shrink-0 rounded ${color}`} />
        <p className="flex w-full items-center justify-between space-x-3 truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <span className="truncate">{caption}</span>
        </p>
      </div>
      <div className="mt-2 pl-4">
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {timing.toFixed(2)}ms
        </p>
      </div>
    </Card>
  )
}

export const PreviewPerformance = ({ performanceTiming }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
      <Stat
        caption="Time to First Byte"
        timing={performanceTiming.firstByte}
        color="bg-blue-500"
      />
      <Stat
        caption="Time to Last Byte"
        timing={performanceTiming.lastByte}
        color="bg-violet-500"
      />
      <Stat
        caption="Total Time"
        timing={performanceTiming.totalTime}
        color="bg-fuchsia-500"
      />
    </div>
  )
}
