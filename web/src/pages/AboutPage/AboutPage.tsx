import { Icon, Title } from '@tremor/react'

import { routes, Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import {
  DashboardIcon,
  DatabasePerformanceIcon,
  GraphQLIcon,
  MailerIcon,
  MadeWithRedwoodIcon,
  MoreIcon,
  MonitoringIcon,
  SearchIcon,
  SettingsIcon,
} from 'src/icons/Icons'

const features = [
  {
    name: 'Dashboard',
    description:
      'Your app at a glance. Measure Database, GraphQL, API and Network performance in real-time. Quickly see the most executed SQL and GraphQL Operations.',
    to: routes.home(),
    icon: DashboardIcon,
  },
  {
    name: 'Monitoring',
    description:
      'Studio is powered by OpenTelemetry sent by your Redwood app. See what traces and spans reveal about the health of your app. Find a problem? Rework and compare the difference to see the improvement.',
    to: routes.opentelemetryTraces(),
    icon: MonitoringIcon,
  },
  {
    name: 'GraphQL',
    description:
      'Visualize your GraphQL Schema. Measure GraphQL Operations and performance. Easily test out your GraphQL API in a fully-integrated GraphiQL Playground complete with authenticated User Impersonation.',
    to: routes.graphqlSchema(),
    icon: GraphQLIcon,
  },
  {
    name: 'Database',
    description:
      'Visualize your Prisma database diagram. Explore your data model and relations, Measure SQL Statement performance in detail.',
    to: routes.databaseSchema(),
    icon: DatabasePerformanceIcon,
  },
  {
    name: 'Mailer',
    description:
      'Intercept emails in development. See what emails are being sent and received. Test out your email templates.',
    to: routes.mailerInbox(),
    icon: MailerIcon,
  },
  {
    name: 'Search',
    description:
      'Quickly search the RedwoodJS Community, Documentation, and more. Get help to build your app faster. Just Command-K and go!',
    to: null,
    icon: SearchIcon,
  },
  {
    name: 'Settings',
    description:
      'Customize your Studio. See what features are enabled, and how User Impersonation is configured.',
    to: routes.settings(),
    icon: SettingsIcon,
  },
  {
    name: 'Made with Redwood',
    description:
      'Studio is built with RedwoodJS. It uses Realtime GraphQL to update data, cells for data fetching, routing for navigation, and more.',
    to: null,
    icon: MadeWithRedwoodIcon,
  },
  {
    name: 'And more ...',
    description:
      'We have lots of plans for the future. We are always adding new features and improvements. Check out our GitHub to see what we are working on.',
    to: null,
    icon: MoreIcon,
  },
]

const AboutPage = () => {
  return (
    <div className="py-4">
      <Metadata title="About" description="About Redwood Studio" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-tremor-600 text-base font-semibold leading-7 text-tremor-brand dark:text-dark-tremor-brand">
            About
          </h2>

          <Title className="font-3xl mt-2 tracking-tight sm:text-4xl">
            Get to Know Redwood Studio
          </Title>
          <p className="mt-6 text-lg leading-8 text-tremor-content dark:text-dark-tremor-content">
            Studio is your trusty companion for RedwoodJS development. It&apos;s
            here to make your coding journey smoother by helping you
            collaborate, visualize, and track your app&apos;s performance.
            Let&apos;s make coding more enjoyable and informative together!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-tremor-brand dark:text-dark-tremor-brand">
                  <Icon
                    icon={feature.icon}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tremor-content dark:text-dark-tremor-content">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {feature.to && (
                      <Link
                        to={feature.to}
                        className="text-sm font-semibold leading-6 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis"
                      >
                        Try it! <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
