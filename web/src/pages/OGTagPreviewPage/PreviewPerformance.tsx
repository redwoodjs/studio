import { Card, Icon, Subtitle, Text } from '@tremor/react'
import type { PerformanceMetric } from 'types/graphql'

import { InfoIcon } from 'src/icons/Icons'

interface Props {
  metrics: PerformanceMetric
}

type Color =
  | 'violet'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

interface StatProps {
  caption: string
  metric: number
  uom?: string
  precision?: number
  color?: Color
  tooltip?: string
}

const Stat = ({
  caption,
  metric,
  uom = 'ms',
  precision = 2,
  color = 'violet',
  tooltip = 'A metric',
}: StatProps) => {
  const statColor = `bg-${color}-500`
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          <div className={`w-1 shrink-0 rounded ${statColor}`} />
          <p className="flex w-full items-center justify-between space-x-3 truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            <span className="truncate">{caption}</span>
          </p>
        </div>
        <span>
          <Icon icon={InfoIcon} color={color} size="sm" tooltip={tooltip} />
        </span>
      </div>
      <div className="mt-2 pl-4">
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {metric.toFixed(precision)}
          {uom}
        </p>
      </div>
    </Card>
  )
}

export const PreviewPerformance = ({ metrics }: Props) => {
  if (!metrics) {
    return (
      <Text className="my-6 text-lg font-bold">
        No performance metrics available
      </Text>
    )
  }

  return (
    <>
      <Subtitle>
        Approximated metrics for the request to generate the preview. Use this
        to gauge the performance of your OpenGraph tags.
      </Subtitle>

      <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat
          caption="Execution Time"
          metric={metrics.executionTime}
          color="blue"
          tooltip="The time to execute the request"
        />
        <Stat
          caption="Response Time"
          metric={metrics.responseTime}
          color="violet"
          tooltip="The time to receive the complete response body"
        />
        <Stat
          caption="Response Size"
          metric={metrics.responseSize / 1_024.0}
          uom="KB"
          precision={2}
          color="fuchsia"
          tooltip="The size of the complete response in kilobytes"
        />
      </div>
    </>
  )
}
