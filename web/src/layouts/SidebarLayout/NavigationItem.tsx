import { NavLink } from '@redwoodjs/router'

export type TNavigationItem = {
  disabled?: boolean
  name: string
  to: string
  // https://www.totaltypescript.com/pass-component-as-prop-react
  icon: React.ElementType<{ className: string }>
}

export const NavigationItem = ({ item }: { item: TNavigationItem }) => {
  return (
    <div className="flex w-full">
      {!item.disabled && (
        <NavLink
          to={item.to}
          className="group flex grow gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-50 hover:text-orange-500 dark:text-gray-600 dark:hover:bg-gray-950"
          activeClassName="group flex grow gap-x-3 text-orange-500 dark:text-orange-500 bg-gray-50 dark:bg-gray-950 rounded-md p-2 text-sm leading-6 font-semibold"
        >
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {item.name}
        </NavLink>
      )}
      {item.disabled && (
        <div className="flex grow gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 dark:text-gray-400">
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {item.name}
        </div>
      )}
    </div>
  )
}
