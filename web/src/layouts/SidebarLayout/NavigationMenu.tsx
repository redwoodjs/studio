import { Flex, Title } from '@tremor/react'

import { routes } from '@redwoodjs/router'

import { MenuClosedIcon, MenuOpenIcon, StudioIcon } from 'src/icons/Icons'

import { ConnectionStatusIndicator } from './ConnectionStatusIndicator'
import { NavigationItem } from './NavigationItem'
import { useNavigationStructure } from './navigationStructure'

export const NavigationMenu = () => {
  // The whole navigation structure has to live here because it needs `routes`
  // and they're not initialized yet outside of components
  const { navigationStructure, toggleGroup } = useNavigationStructure(routes)

  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        className="pt-4"
      >
        <StudioIcon className="h-8 w-auto shrink-0 text-tremor-brand-emphasis" />
        <Title className="pl-3">RedwoodJS Studio</Title>
      </Flex>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-4">
          {navigationStructure.map((group, index) => (
            <li key={group.id}>
              {group.title && (
                <button
                  className="w-full text-left text-xs font-semibold leading-6 text-gray-400 hover:text-tremor-content-strong dark:hover:text-dark-tremor-content-strong"
                  onClick={() => toggleGroup(group.id)}
                >
                  {group.closed ? (
                    <MenuClosedIcon className="-mt-[3px] inline-block h-3 w-3 stroke-[4px]" />
                  ) : (
                    <MenuOpenIcon className="-mt-[3px] inline-block h-3 w-3 stroke-[4px]" />
                  )}{' '}
                  {group.title}
                </button>
              )}
              <ul
                className={
                  `-mx-2 ${index ? 'mt-2 ' : ''}space-y-1 ` +
                  (group.closed ? 'mb-0 h-0 overflow-hidden' : 'mb-3')
                }
              >
                {group.items.map((item) => (
                  <li key={item.name}>
                    <NavigationItem item={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="mb-6 mt-auto">
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Development Server
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              <li>
                <ConnectionStatusIndicator />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
