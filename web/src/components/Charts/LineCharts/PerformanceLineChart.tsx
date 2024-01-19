import { LineChart } from '@tremor/react'
import type { PerformanceDataPoint } from 'types/graphql'

import { categoryColors } from '../categoryColors'
import { formattedTimeAgo } from '../time'

const PerformanceLineChart = ({
  dataPoints,
}: {
  dataPoints: PerformanceDataPoint[]
}) => {
  const spanTypeNames = dataPoints.map((dataPoint) => dataPoint.spanTypeName)

  const categories = [...new Set(spanTypeNames)] as string[]

  const chartdata = dataPoints.map((dataPoint) => {
    return {
      ago: formattedTimeAgo(dataPoint.startedAt),
      [dataPoint.spanTypeName]: dataPoint.durationMs,
    }
  })

  return (
    <LineChart
      className="mt-6"
      data={chartdata}
      index="ago"
      categories={categories}
      colors={categoryColors(categories.length)}
      // valueFormatter={valueFormatter}
      yAxisWidth={40}
      connectNulls={true}
      allowDecimals={true}
      noDataText="No recent data to display"
    />
  )
}

export default PerformanceLineChart
