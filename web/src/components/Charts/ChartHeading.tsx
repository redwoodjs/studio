import { Flex, Icon, Subtitle } from '@tremor/react'

const ChartHeading = ({
  caption,
  tooltip,
  icon,
}: {
  caption: string
  tooltip?: string
  icon: React.ElementType
}) => (
  <Flex alignItems="center" justifyContent="start" className="space-x-2">
    <Icon icon={icon} variant="solid" tooltip={tooltip || caption} />
    <Subtitle>{caption}</Subtitle>
  </Flex>
)

export default ChartHeading
