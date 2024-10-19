import type { Route } from 'types/graphql'

import { RouteCardItem } from './RouteCardItem'

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  renderGraphRoutes: Route[]
  componentCount?: number | null
  currentRoute?: string | null
  isWide?: boolean
}

export const RouteCardsGrid = ({
  renderGraphRoutes,
  isWide = false,
  componentCount,
  currentRoute,
}: Props) => {
  const isCurrentRoute = (routeName: string) => {
    return currentRoute === routeName
  }

  const currentRouteItems = renderGraphRoutes.filter((route) =>
    isCurrentRoute(route.name)
  )

  const otherRouteItems = renderGraphRoutes
    .filter((route) => !isCurrentRoute(route.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Project Routes</h2>
      <ul
        className={classNames(
          isWide ? 'sm:grid-cols-2 sm:gap-6 lg:grid-cols-4' : '',
          'mt-3 grid grid-cols-1 gap-5'
        )}
      >
        {currentRouteItems.map((route, index) => (
          <RouteCardItem
            key={route.id}
            route={route}
            index={index}
            componentCount={componentCount}
          />
        ))}
        {otherRouteItems.map((route, index) => (
          <RouteCardItem
            key={route.id}
            route={route}
            index={index}
            currentRoute={currentRoute}
            componentCount={isCurrentRoute(route.name) ? componentCount : null}
          />
        ))}
      </ul>
    </div>
  )
}
