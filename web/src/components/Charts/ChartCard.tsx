import React, { ReactNode } from 'react'

import { Card } from '@tremor/react'

import ChartHeading from './ChartHeading'

interface ChartCardProps {
  caption: string
  icon: React.ComponentType<any> // Adjust the type according to the actual type of DatabasePerformanceIcon
  tooltip?: string
  children: ReactNode
}

const ChartCard: React.FC<ChartCardProps> = ({
  caption,
  icon,
  tooltip,
  children,
}) => (
  <Card>
    <ChartHeading caption={caption} icon={icon} tooltip={tooltip || caption} />
    {children}
  </Card>
)
export default ChartCard
