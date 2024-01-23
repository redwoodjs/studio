import { LineChart } from '@tremor/react'

const ChartFailureState = ({ message }: { message: string }) => (
  <LineChart
    className="mt-6"
    data={[]}
    index="ago"
    categories={[]}
    colors={[]}
    yAxisWidth={40}
    connectNulls={true}
    allowDecimals={true}
    noDataText={message}
  />
)

export default ChartFailureState
