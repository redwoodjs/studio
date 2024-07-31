import { Router, Route, Set } from '@redwoodjs/router'

import SidebarLayout from 'src/layouts/SidebarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SidebarLayout}>
        <Route path="/" page={DashboardPage} name="home" />

        <Route path="/monitoring/traces" page={OpenTelemetryTracesPage} name="opentelemetryTraces" />
        <Route path="/monitoring/traces/{id:String}" page={OpenTelemetryTracePage} name="opentelemetryTrace" />
        <Route path="/monitoring/spans" page={OpenTelemetrySpansPage} name="opentelemetrySpans" />
        <Route path="/monitoring/spans/{id:String}" page={OpenTelemetrySpanPage} name="opentelemetrySpan" />

        <Route path="/database/schema" page={DatabaseSchemaPage} name="databaseSchema" />
        <Route path="/database/sql-statements" page={DatabaseSQLStatementsPage} name="databaseSqlStatements" />

        <Route path="/gql/playground" page={GraphQLPlaygroundPage} name="graphiql" />
        <Route path="/gql/operations" page={GraphQLOperationsPage} name="graphQLOperations" />
        <Route path="/gql/schema" page={GraphQLSchemaPage} name="graphqlSchema" />

        <Route path="/mailer/inbox" page={MailerInboxPage} name="mailerInbox" />
        <Route path="/mailer/template-preview" page={MailerTemplatePreviewPage} name="mailerTemplatePreview" />

        <Route path="/rsc/cache" page={RscCachePage} name="rscCache" />

        <Route path="/ssr/og-tag-preview" page={OGTagPreviewPage} name="ogTagPreview" />
        <Route path="/studio/settings" page={InfoPage} name="settings" />
        <Route path="/studio/about" page={AboutPage} name="about" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
