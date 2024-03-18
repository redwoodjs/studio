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
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Project Routes</h2>
      <ul
        className={classNames(
          isWide ? 'sm:grid-cols-2 sm:gap-6 lg:grid-cols-4' : '',
          'mt-3 grid grid-cols-1 gap-5'
        )}
      >
        {renderGraphRoutes.map((route, index) => (
          <RouteCardItem
            key={route.id}
            route={route}
            index={index}
            currentRoute={currentRoute}
            componentCount={currentRoute == route.name ? componentCount : null}
          />
        ))}
      </ul>
    </div>
  )
}
