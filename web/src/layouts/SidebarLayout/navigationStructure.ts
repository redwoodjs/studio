import { useCallback, useState } from 'react'

import type { AvailableRoutes } from '@redwoodjs/router'

import {
  AboutIcon,
  DashboardIcon,
  ErdIcon,
  FlightIcon,
  GraphQLIcon,
  InboxIcon,
  SettingsIcon,
  OGTagPreviewIcon,
  OperationsIcon,
  PlaygroundIcon,
  RoutesIcon,
  SpansIcon,
  SqlStatementsIcon,
  TemplatesIcon,
  TracesIcon,
  CacheIcon,
} from 'src/icons/Icons'

import type { TNavigationItem } from './NavigationItem'

interface NavigationGroup {
  id: string
  title: string
  items: TNavigationItem[]
  closed: boolean
}

export function useNavigationStructure(routes: AvailableRoutes) {
  const [closedGroups, setClosedGroups] = useState(new Set<string>())

  const toggleGroup = useCallback(
    (groupId: string) => {
      if (!closedGroups.delete(groupId)) {
        closedGroups.add(groupId)
      }

      setClosedGroups(new Set(closedGroups))
    },
    [closedGroups]
  )

  const dashboardNavigation: TNavigationItem[] = [
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

  const rscNavigation: TNavigationItem[] = [
    {
      name: 'Cache',
      to: routes.rscCache(),
      icon: CacheIcon,
    },
    {
      name: 'RSC Payloads',
      to: routes.flights(),
      icon: FlightIcon,
    },
    {
      name: 'Render Routes',
      to: routes.renderGraphRoutes(),
      icon: RoutesIcon,
    },
  ]

  const ssrNavigation: TNavigationItem[] = [
    {
      name: 'OG Tag Preview',
      to: routes.ogTagPreview(),
      icon: OGTagPreviewIcon,
    },
  ]

  const studioNavigation: TNavigationItem[] = [
    { name: 'Settings', to: routes.settings(), icon: SettingsIcon },
    { name: 'About', to: routes.about(), icon: AboutIcon },
  ]

  const navigationGroups: Array<NavigationGroup> = [
    {
      id: 'dashboard',
      title: '',
      items: dashboardNavigation,
      closed: closedGroups.has('dashboard'),
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      items: telemetryNavigation,
      closed: closedGroups.has('monitoring'),
    },
    {
      id: 'graphql',
      title: 'GraphQL',
      items: graphQLNavigation,
      closed: closedGroups.has('graphql'),
    },
    {
      id: 'database',
      title: 'Database',
      items: databaseNavigation,
      closed: closedGroups.has('database'),
    },
    {
      id: 'mailer',
      title: 'Mailer',
      items: mailerNavigation,
      closed: closedGroups.has('mailer'),
    },
    {
      id: 'rsc',
      title: 'RSC',
      items: rscNavigation,
      closed: closedGroups.has('rsc'),
    },
    {
      id: 'ssr',
      title: 'SSR',
      items: ssrNavigation,
      closed: closedGroups.has('ssr'),
    },
    {
      id: 'studio',
      title: 'Studio',
      items: studioNavigation,
      closed: closedGroups.has('studio'),
    },
  ]

  return { navigationStructure: navigationGroups, toggleGroup }
}
