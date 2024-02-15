import { Icon } from '@tremor/react'

import { routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import { HideIcon, OGTagPreviewIcon } from 'src/icons/Icons'

import type { TNavigationItem } from './NavigationItem'
import { NavigationItem } from './NavigationItem'

const SSR_QUERY = gql`
  query GetUserProjectConfig {
    userProjectConfig {
      id
      ssr {
        id
        enabled {
          status
          message
        }
      }
    }
  }
`

export const SsrNavigationSubMenu = () => {
  const { data, loading, error } = useQuery(SSR_QUERY)
  let ssrEnabled = false

  if (error) {
    console.error('Failed to load SSR configuration', error)
  }

  if (!loading && data?.userProjectConfig?.ssr?.enabled.status) {
    ssrEnabled = true
  }

  const ssrNavigation: TNavigationItem[] = [
    {
      name: 'OG Tag Preview',
      to: routes.ogTagPreview(),
      icon: OGTagPreviewIcon,
      disabled: !ssrEnabled,
    },
  ]

  return (
    <li>
      <div className="flex items-start space-x-2 text-xs font-semibold leading-6 text-gray-400">
        SSR
        {!ssrEnabled && (
          <Icon
            icon={HideIcon}
            size="xs"
            color="gray"
            tooltip="SSR is not enabled in your project."
          />
        )}
      </div>
      <ul className="-mx-2 mt-2 space-y-1">
        {ssrNavigation.map((item) => (
          <li key={item.name}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
    </li>
  )
}
