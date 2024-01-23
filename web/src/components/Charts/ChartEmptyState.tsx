import { LineChart } from '@tremor/react'

const ChartEmptyState = () => (
  <LineChart
    className="mt-6"
    data={[]}
    index="ago"
    categories={[]}
    colors={[]}
    yAxisWidth={40}
    connectNulls={true}
    allowDecimals={true}
    noDataText="No recent data to display"
  />
)

export default ChartEmptyState
