'use client'
import React from 'react'

import Tooltip, {
  useTooltip,
} from '@tremor/react/dist/components/util-elements/Tooltip/Tooltip'
import { Color } from '@tremor/react/dist/lib/inputTypes'
import { colorPalette } from '@tremor/react/dist/lib/theme'
import { tremorTwMerge } from '@tremor/react/dist/lib/tremorTwMerge'
import {
  getColorClassNames,
  makeClassName,
  mergeRefs,
} from '@tremor/react/dist/lib/utils'

import { navigate } from '@redwoodjs/router'
export const makeTrackerClassName = makeClassName('Tracker')

export interface TrackerBlockProps {
  key?: string | number
  color?: Color | string
  tooltip?: string
  to?: string
}

const TrackerBlock = React.forwardRef<HTMLDivElement, TrackerBlockProps>(
  (props, ref) => {
    const { color, tooltip, to, ...other } = props

    const { tooltipProps, getReferenceProps } = useTooltip()

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        ref={mergeRefs([ref, tooltipProps.refs.setReference])}
        onClick={() => {
          if (to) {
            navigate(to)
          }
        }}
        className={tremorTwMerge(
          makeTrackerClassName('trackingBlock'),
          'h-full w-full rounded-[1px] first:rounded-l-[4px] last:rounded-r-[4px]',
          getColorClassNames(color ?? 'gray', colorPalette.background).bgColor
        )}
        {...other}
        {...getReferenceProps}
      >
        <Tooltip text={tooltip} {...tooltipProps} />
      </div>
    )
  }
)

TrackerBlock.displayName = 'TrackerBlock'

export interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[]
}

const FlightTracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (props, ref) => {
    const { data = [], className, ...other } = props
    return (
      <div
        ref={ref}
        className={tremorTwMerge(
          makeTrackerClassName('root'),
          'flex h-10 items-center space-x-0.5',
          className
        )}
        {...other}
      >
        {data.map((item, idx) => (
          <TrackerBlock
            key={item.key ?? idx}
            color={item.color}
            tooltip={item.tooltip}
            to={item.to}
          />
        ))}
      </div>
    )
  }
)

FlightTracker.displayName = 'Tracker'

export default FlightTracker
