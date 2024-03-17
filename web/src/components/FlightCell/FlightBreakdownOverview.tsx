import { Card, DonutChart, Flex, Icon, List, ListItem } from '@tremor/react'

import { FlightIcon } from 'src/icons/Icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const kilobyteFormatter = (number) => {
  return `${(number / 1_024).toFixed(3)} KB`
}

export const FlightBreakdownOverview = ({ data, metadata }) => {
  function extractColors(data) {
    return data
      .map((item) => {
        const match = item.color.match(/bg-(.*?)-\d+/)
        return match ? match[1] : null
      })
      .filter((color) => color !== null) // This line removes any null values if a match wasn't found
  }

  const colors = extractColors(data)

  const caption = `Preview for ${
    metadata?.rsc?.rscId || metadata?.rsc?.rsfId || 'Unknown'
  }`
  return (
    <Card>
      <Flex alignItems="center" justifyContent="start" className="space-x-2">
        <Icon icon={FlightIcon} variant="solid" tooltip={caption} />
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          {caption}
        </h3>
      </Flex>
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
              <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {kilobyteFormatter(item.amount)}
              </span>
              <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                {item.share}
              </span>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
