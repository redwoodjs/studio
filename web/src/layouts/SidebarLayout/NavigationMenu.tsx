import { Flex, Title } from '@tremor/react'

import { NavLink, routes } from '@redwoodjs/router'

import {
  DashboardIcon,
  DiscordIcon,
  DiscourseIcon,
  ErdIcon,
  GitHubIcon,
  GraphQLIcon,
  InboxIcon,
  OGTagPreviewIcon,
  OperationsIcon,
  PlaygroundIcon,
  SpansIcon,
  SqlStatementsIcon,
  TemplatesIcon,
  TracesIcon,
} from 'src/icons/Icons'

import { ConnectionStatusIndicator } from './ConnectionStatusIndicator'
import { OrbitSearch } from './OrbitSearch'

type TNavigationItem = {
  name: string
  to: string
  // https://www.totaltypescript.com/pass-component-as-prop-react
  icon: React.ElementType<{ className: string }>
}
// v7 ships with SSR section disabled as Bighorn introduces the feature
const includeSSR = false

const NavigationItem = ({ item }: { item: TNavigationItem }) => {
  return (
    <div className="flex w-full">
      <NavLink
        to={item.to}
        className="group flex grow gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-50 hover:text-orange-500 dark:text-gray-600 dark:hover:bg-gray-950"
        activeClassName="grow text-orange-500 dark:text-orange-500 bg-gray-50 dark:bg-gray-950 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
      >
        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {item.name}
      </NavLink>
    </div>
  )
}

const NavigationHrefItem = ({ item }: { item: TNavigationItem }) => {
  return (
    <div className="flex w-full">
      <a
        href={item.to}
        target="_blank"
        className="group flex grow gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-50 hover:text-orange-500 dark:text-gray-600 dark:hover:bg-gray-950"
        rel="noreferrer"
      >
        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        {item.name}
      </a>
    </div>
  )
}

export const NavigationMenu = () => {
  const navigation: TNavigationItem[] = [
    { name: 'Dashboard', to: routes.home(), icon: DashboardIcon },
  ]

  const telemetryNavigation: TNavigationItem[] = [
    {
      name: 'Traces',
      to: routes.opentelemetryTraces(),
      icon: TracesIcon,
    },
    {
      name: 'Spans',
      to: routes.opentelemetrySpans(),
      icon: SpansIcon,
    },
  ]

  const databaseNavigation: TNavigationItem[] = [
    {
      name: 'Schema',
      to: routes.databaseSchema(),
      icon: ErdIcon,
    },
    {
      name: 'SQL Statements',
      to: routes.databaseSqlStatements(),
      icon: SqlStatementsIcon,
    },
  ]

  const graphQLNavigation: TNavigationItem[] = [
    {
      name: 'Schema',
      to: routes.graphqlSchema(),
      icon: GraphQLIcon,
    },
    {
      name: 'Operations',
      to: routes.graphQLOperations(),
      icon: OperationsIcon,
    },
    {
      name: 'Playground',
      to: routes.graphiql(),
      icon: PlaygroundIcon,
    },
  ]

  const mailerNavigation: TNavigationItem[] = [
    { name: 'Inbox', to: routes.mailerInbox(), icon: InboxIcon },
    {
      name: 'Templates',
      to: routes.mailerTemplatePreview(),
      icon: TemplatesIcon,
    },
  ]

  const ssrNavigation: TNavigationItem[] = [
    {
      name: 'OG Tag Preview',
      to: routes.ogTagPreview(),
      icon: OGTagPreviewIcon,
    },
  ]

  const communityNavigation: TNavigationItem[] = [
    {
      name: 'Discord',
      to: 'https://discord.gg/redwoodjs',
      icon: DiscordIcon,
    },
    {
      name: 'Forums',
      to: 'https://community.redwoodjs.com/',
      icon: DiscourseIcon,
    },
    {
      name: 'GitHub',
      to: 'https://github.com/redwoodjs',
      icon: GitHubIcon,
    },
  ]

  return (
    <>
      <div className="mt-4 flex h-16 shrink-0 items-center">
        <img className="h-8 w-auto" src="/mark.svg" alt="RedwoodJS" />
        <Flex flexDirection="row" justifyContent="start" alignItems="center">
          <Title className="pl-2">RedwoodJS Studio</Title>
        </Flex>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-6">
          <li>
            <OrbitSearch />
          </li>
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Monitoring
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              {telemetryNavigation.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              GraphQL
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              {graphQLNavigation.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Database
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              {databaseNavigation.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Mailer
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              {mailerNavigation.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          {includeSSR && (
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                SSR
              </div>
              <ul className="-mx-2 mt-2 space-y-1">
                {ssrNavigation.map((item) => (
                  <li key={item.name}>
                    <NavigationItem item={item} />
                  </li>
                ))}
              </ul>
            </li>
          )}
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Community
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              {communityNavigation.map((item) => (
                <li key={item.name}>
                  <NavigationHrefItem item={item} />
                </li>
              ))}
            </ul>
          </li>
          <li className="mb-6 mt-auto">
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Development Server
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              <ConnectionStatusIndicator />
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
