import { LineChart } from '@tremor/react'

const ChartFailureState = ({ message }: { message: string }) => (
  <LineChart
    className="mt-6"
    data={[]}
    index="ago"
    categories={[]}
    noDataText={message}
  />
)

export default ChartFailureState
