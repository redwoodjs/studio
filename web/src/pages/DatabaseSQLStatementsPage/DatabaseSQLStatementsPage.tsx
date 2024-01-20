import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const DatabaseSqlStatementsPage = () => {
  return (
    <>
      <Metadata
        title="DatabaseSqlStatements"
        description="DatabaseSqlStatements page"
      />

      <h1>DatabaseSqlStatementsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/DatabaseSQLStatementsPage/DatabaseSQLStatementsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>databaseSqlStatements</code>, link to me
        with `
        <Link to={routes.databaseSqlStatements()}>DatabaseSqlStatements</Link>`
      </p>
    </>
  )
}

export default DatabaseSqlStatementsPage
