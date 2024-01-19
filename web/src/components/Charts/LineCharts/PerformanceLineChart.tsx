import { LineChart } from '@tremor/react'

import { categoryColors } from '../categoryColors'

const PerformanceLineChart = ({ dataPoints }) => {
  const spanTypeNames = dataPoints.map((dataPoint) => dataPoint.spanTypeName)

  const categories = [...new Set(spanTypeNames)] as string[]

  const chartdata = dataPoints.map((dataPoint) => {
    return {
      duration: dataPoint.startedAt,
      [dataPoint.spanTypeName]: dataPoint.durationMs,
    }
  })

  return (
    <LineChart
      className="mt-6"
      data={chartdata}
      index="duration"
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
