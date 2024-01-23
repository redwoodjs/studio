import { LineChart } from '@tremor/react'

const ChartLoadingState = ({
  message = 'Loading ...',
}: {
  message?: string
}) => (
  <LineChart
    className="mt-6"
    data={[]}
    index="ago"
    categories={[]}
    noDataText={message}
  />
)

export default ChartLoadingState
