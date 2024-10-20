import { Card, DonutChart, Flex, Icon, List, ListItem } from '@tremor/react'

import { FlightIcon } from 'src/icons/Icons'

import { kilobyteFormatter } from './utils/formatters'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Caption = ({ metadata }) => {
  const text = metadata?.rsc?.rscId || metadata?.rsc?.rsaId || 'Unknown'

  return (
    <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
      {text} Overview
    </h3>
  )
}
const Heading = ({ metadata }) => {
  const tooltip = metadata?.rsc?.rscId || metadata?.rsc?.rsaId || 'Unknown'

  return (
    <Flex alignItems="center" justifyContent="start" className="space-x-2">
      <Icon icon={FlightIcon} variant="solid" tooltip={tooltip} />
      <Caption metadata={metadata} />
    </Flex>
  )
}

const Kilobytes = ({ amount }) => {
  return (
    <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
      {kilobyteFormatter(amount)}
    </span>
  )
}

const Share = ({ share }) => {
  return (
    <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
      {share}
    </span>
  )
}
export const FlightBreakdownOverview = ({ data, metadata }) => {
  const extractColors = (data) => {
    return data
      .map((item) => {
        const match = item.color.match(/bg-(.*?)-\d+/)
        return match ? match[1] : null
      })
      .filter((color) => color !== null)
  }

  const colors = extractColors(data)

  return (
    <Card>
      <Heading metadata={metadata} />
      <DonutChart
        className="mt-8"
        data={data}
        category="amount"
        index="name"
        valueFormatter={kilobyteFormatter}
        showTooltip={true}
        colors={colors}
      />
      <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
        <span>Chunk</span>
        <span>Size / Share</span>
      </p>
      <List className="mt-2">
        {data.map((item) => (
          <ListItem key={item.name} className="space-x-6">
            <div className="flex items-center space-x-2.5 truncate">
              <span
                className={classNames(
                  item.color,
                  'h-2.5 w-2.5 shrink-0 rounded-sm'
                )}
                aria-hidden={true}
              />
              <span className="truncate dark:text-dark-tremor-content-emphasis">
                {item.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Kilobytes amount={item.amount} />
              <Share share={item.share} />
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
