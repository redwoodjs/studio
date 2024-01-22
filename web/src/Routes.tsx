import { Router, Route, Set } from '@redwoodjs/router'

import SidebarLayout from 'src/layouts/SidebarLayout'
import GraphQLSchemaPage from 'src/pages/GraphQLSchemaPage/GraphQLSchemaPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SidebarLayout}>
        <Route path="/" page={HomePage} name="home" />

        {/* TODO: Implement functionality and restore the route */}
        {/* <Route path="/graphql" page={GraphQLPage} name="graphql" /> */}

        {/* TODO: Implement functionality and restore the route */}
        {/* <Route path="/prisma" page={PrismaPage} name="prisma" /> */}

        <Route path="/opentelemetry/traces" page={OpenTelemetryTracesPage} name="opentelemetryTraces" />
        <Route path="/opentelemetry/traces/{id:String}" page={OpenTelemetryTracePage} name="opentelemetryTrace" />
        <Route path="/opentelemetry/spans" page={OpenTelemetrySpansPage} name="opentelemetrySpans" />
        <Route path="/opentelemetry/spans/{id:String}" page={OpenTelemetrySpanPage} name="opentelemetrySpan" />

        <Route path="/graphiql" page={GraphiqlPage} name="graphiql" />
        <Route path="/gql/schema" page={GraphQLSchemaPage} name="graphQLInspector" />
        <Route path="/mailer-inbox" page={MailerInboxPage} name="mailerInbox" />
        <Route path="/mailer-template-preview" page={MailerTemplatePreviewPage} name="mailerTemplatePreview" />

        <Route path="/og-tag-preview" page={OGTagPreviewPage} name="ogTagPreview" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
