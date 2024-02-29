import { NavLink } from '@redwoodjs/router'

export type TNavigationItem = {
  name: string
  to: string
  // https://www.totaltypescript.com/pass-component-as-prop-react
  icon: React.ElementType<{ className: string }>
}

export const NavigationItem = ({ item }: { item: TNavigationItem }) => {
  return (
    <div className="flex w-full">
      <NavLink
        to={item.to}
        className="dark:text-dark-tremor group flex grow gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-tremor-content hover:bg-gray-50 hover:text-tremor-brand dark:hover:bg-gray-950"
        activeClassName="grow text-tremor-brand dark:text-dark-tremor-brand bg-gray-50 dark:bg-gray-950 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
      >
        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {item.name}
      </NavLink>
    </div>
  )
}
