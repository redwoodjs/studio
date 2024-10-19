import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Icon } from '@tremor/react'
import type { Route } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { RouteIcon } from 'src/icons/Icons'

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const getColorForIndex = (index) => {
  if (index === 0) {
    return 'bg-tremor-brand'
  }
  const colors = [
    'rose',
    'fuchsia',
    'amber',
    'teal',
    'emerald',
    'sky',
    'cyan',
    'lime',
    'pink',
    'blue',
    'purple',
    'indigo',
  ]
  const values = [500, 400, 300]

  const totalCombinations = colors.length * values.length

  // Calculate the cycle index. Assume 0-based index.
  const cycleIndex = index % totalCombinations

  // Calculate the current value and color index.
  // The difference is here: first cycle through all colors for a given value.
  const valueIndex = Math.floor(cycleIndex / colors.length)
  const colorIndex = cycleIndex % colors.length

  // Return the color string.
  return `bg-${colors[colorIndex]}-${values[valueIndex]}`
}

type Props = {
  route: Route
  componentCount?: number | null
  currentRoute?: string | null
  index: number
}

export const RouteCardItem = ({
  route,
  componentCount,
  currentRoute,
  index,
}: Props) => {
  const routeItem = {
    name: route.name,
    icon: RouteIcon,
    bgColor: getColorForIndex(index),
    to: routes.renderGraph({ routeName: route.name }),
    componentCount: componentCount,
  }
  return (
    <li key={routeItem.name} className="col-span-1 flex rounded-md shadow-sm">
      <div
        className={classNames(
          routeItem.bgColor,
          'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
        )}
      >
        <Link to={routeItem.to}>
          <Icon icon={routeItem.icon} size="md" className="text-white" />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <Link
            to={routeItem.to}
            className={classNames(
              currentRoute === routeItem.name ? 'font-bold' : 'font-medium',
              'text-gray-900 hover:text-gray-600'
            )}
          >
            {routeItem.name}
          </Link>
          {routeItem.componentCount && routeItem.componentCount > 0 && (
            <p className="text-gray-500">
              {routeItem.componentCount} Components
            </p>
          )}
          {!routeItem.componentCount ||
            (routeItem.componentCount === 0 && (
              <p className="text-gray-500"></p>
            ))}
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </li>
  )
}
