import { Bold } from '@tremor/react'

const ChartFailureState = ({ message }: { message: string }) => (
  <Bold color="red">{message}</Bold>
)

export default ChartFailureState
