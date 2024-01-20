import { Title } from '@tremor/react'

const ChartLoadingState = ({
  message = 'Loading ...',
}: {
  message?: string
}) => <Title>{message}</Title>

export default ChartLoadingState
