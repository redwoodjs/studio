import { Router, Route, Set } from '@redwoodjs/router'

import SidebarLayout from 'src/layouts/SidebarLayout'
import DatabaseErdPage from 'src/pages/DatabaseErdPage/DatabaseErdPage'
import DatabaseSqlStatementsPage from 'src/pages/DatabaseSQLStatementsPage/DatabaseSQLStatementsPage'
import GraphQLInspectorPage from 'src/pages/GraphQLInspectorPage/GraphQLInspectorPage'
import GraphQLOperationsPage from 'src/pages/GraphQLOperationsPage/GraphQLOperationsPage'
import GraphQLPlaygroundPage from 'src/pages/GraphQLPlaygroundPage/GraphQLPlaygroundPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SidebarLayout}>
        <Route path="/" page={DashboardPage} name="home" />

        <Route path="/monitoring/traces" page={OpenTelemetryTracesPage} name="opentelemetryTraces" />
        <Route path="/monitoring/traces/{id:String}" page={OpenTelemetryTracePage} name="opentelemetryTrace" />
        <Route path="/monitoring/spans" page={OpenTelemetrySpansPage} name="opentelemetrySpans" />
        <Route path="/monitoring/spans/{id:String}" page={OpenTelemetrySpanPage} name="opentelemetrySpan" />

        <Route path="/database/erd" page={DatabaseErdPage} name="databaseErd" />
        <Route path="/database/sql-statements" page={DatabaseSqlStatementsPage} name="databaseSqlStatements" />

        <Route path="/gql/playground" page={GraphQLPlaygroundPage} name="graphiql" />
        <Route path="/gql/inspector" page={GraphQLInspectorPage} name="graphQLInspector" />
        <Route path="/gql/operations" page={GraphQLOperationsPage} name="graphQLOperations" />

        <Route path="/mailer/inbox" page={MailerInboxPage} name="mailerInbox" />
        <Route path="/mailer/template-preview" page={MailerTemplatePreviewPage} name="mailerTemplatePreview" />

        <Route path="/ssr/og-tag-preview" page={OGTagPreviewPage} name="ogTagPreview" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
