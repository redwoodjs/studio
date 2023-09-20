import { Router, Route, Set } from '@redwoodjs/router'

import SidebarLayout from 'src/layouts/SidebarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SidebarLayout}>
        <Route path="/" page={HomePage} name="home" />

        <Route path="/graphql" page={GraphQLPage} name="graphql" />

        <Route path="/prisma" page={PrismaPage} name="prisma" />

        <Route path="/telemetry-dashboard" page={TelemetryDashboardPage} name="telemetryDashboard" />

        <Route path="/mailer-inbox" page={MailerInboxPage} name="mailerInbox" />
        <Route path="/mailer-template-preview" page={MailerTemplatePreviewPage} name="mailerTemplatePreview" />

        <Route path="/og-tag-preview" page={OGTagPreviewPage} name="ogTagPreview" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
