import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import { Link, routes } from '@redwoodjs/router'

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const getColorForIndex = (index) => {
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

export const RouteCardsGrid = ({ renderGraphRoutes }) => {
  const projectRoutes = renderGraphRoutes.map((route, idx) => {
    return {
      name: route.name,
      initials: route.name.charAt(0),
      bgColor: getColorForIndex(idx),
      href: routes.renderGraph({ routeName: route.name }),
      members: 16,
    }
  })

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Project Routes</h2>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projectRoutes.map((route) => (
          <li key={route.name} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                route.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {route.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link
                  to={route.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {route.name}
                </Link>
                <p className="text-gray-500">{route.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
