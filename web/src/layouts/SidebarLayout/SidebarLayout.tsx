import { Fragment, useState } from 'react'

import { useQuery } from '@apollo/client'
import { Dialog, Transition } from '@headlessui/react'
import { Flex, Subtitle, Title } from '@tremor/react'
import { GetConnectionStatus } from 'types/graphql'

import { NavLink, routes } from '@redwoodjs/router'

import {
  CloseIcon,
  DashboardIcon,
  ErdIcon,
  GraphQLIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  OGTagPreviewIcon,
  OperationsIcon,
  PlaygroundIcon,
  SpansIcon,
  SqlStatementsIcon,
  TemplatesIcon,
  TracesIcon,
} from 'src/icons/Icons'

const CONNECTION_STATUS_QUERY = gql`
  query GetConnectionStatus @live {
    connectionStatus {
      id
      developmentServer
    }
  }
`

type SidebarLayoutProps = {
  children?: React.ReactNode
}

type TNavigationItem = {
  name: string
  to: string
  icon: typeof HomeIcon
}

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

const ConnectionStatusIndicator = ({
  developmentServer,
}: {
  developmentServer: 'connected' | 'disconnected' | 'unknown'
}) => {
  const bgColorDark =
    developmentServer === 'connected'
      ? 'bg-green-500'
      : developmentServer === 'disconnected'
      ? 'bg-red-500'
      : 'bg-yellow-500'
  const bgColorLight =
    developmentServer === 'connected'
      ? 'bg-green-400'
      : developmentServer === 'disconnected'
      ? 'bg-red-400'
      : 'bg-yellow-400'

  return (
    <div className="group flex w-full grow items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-500 dark:text-gray-600">
      <span className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgColorLight} opacity-75`}
        ></span>
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${bgColorDark}`}
        ></span>
      </span>
      <span>
        {developmentServer === 'connected'
          ? 'Connected'
          : developmentServer === 'disconnected'
          ? 'Disconnected'
          : 'Please Reload'}
      </span>
    </div>
  )
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
      name: 'SQL Statements',
      to: routes.databaseSqlStatements(),
      icon: SqlStatementsIcon,
    },
    {
      name: 'Entity Relation Diagram',
      to: routes.databaseErd(),
      icon: ErdIcon,
    },
  ]

  const graphQLNavigation: TNavigationItem[] = [
    {
      name: 'Playground',
      to: routes.graphiql(),
      icon: PlaygroundIcon,
    },
    {
      name: 'Operations',
      to: routes.graphQLOperations(),
      icon: OperationsIcon,
    },
    {
      name: 'Schema Diagram',
      to: routes.graphqlSchema(),
      icon: GraphQLIcon,
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

  const {
    data: connectionStatusData,
    loading: connectionStatusLoading,
    error: connectionStatusError,
  } = useQuery<GetConnectionStatus>(CONNECTION_STATUS_QUERY)

  const developmentServerStatus =
    connectionStatusLoading ||
    connectionStatusError ||
    connectionStatusData === undefined
      ? 'unknown'
      : connectionStatusData.connectionStatus.developmentServer
      ? 'connected'
      : 'disconnected'

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <CloseIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 dark:bg-gray-900">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/mark.svg"
                        alt="RedwoodJS"
                      />
                      <Flex
                        flexDirection="col"
                        justifyContent="start"
                        alignItems="start"
                      >
                        <Title className="pl-4">RedwoodJS Studio</Title>
                        <Subtitle className="-mt-1 pl-6 text-sm">
                          {window.RW_STUDIO_VERSION}
                        </Subtitle>
                      </Flex>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7">
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
                        <li className="mb-6 mt-auto">
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Development Server
                          </div>
                          <ul className="-mx-2 mt-2 space-y-1">
                            <ConnectionStatusIndicator
                              developmentServer={developmentServerStatus}
                            />
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="/mark.svg" alt="RedwoodJS" />
              <Flex
                flexDirection="col"
                justifyContent="start"
                alignItems="start"
              >
                <Title className="pl-4">RedwoodJS Studio</Title>
                <Subtitle className="-mt-1 pl-6 text-sm">
                  {window.RW_STUDIO_VERSION}
                </Subtitle>
              </Flex>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-4">
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
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
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
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
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
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
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
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
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
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
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
                <li className="mb-6 mt-auto">
                  <div className="text-xs font-semibold leading-6 text-gray-400 dark:text-gray-600">
                    Development Server
                  </div>
                  <ul className="-mx-2 mt-2 space-y-1">
                    <ConnectionStatusIndicator
                      developmentServer={developmentServerStatus}
                    />
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm dark:bg-gray-900 sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon
              className="h-6 w-6 text-gray-500 dark:text-gray-600"
              aria-hidden="true"
            />
          </button>
          {/* <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            TODO: Page title?
          </div> */}
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}

export default SidebarLayout
