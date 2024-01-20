import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const GraphQLOperationsPage = () => {
  return (
    <>
      <Metadata
        title="GraphQlOperations"
        description="GraphQlOperations page"
      />

      <h1>GraphQlOperationsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/GraphQLOperationsPage/GraphQLOperationsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>graphQlOperations</code>, link to me
        with `<Link to={routes.graphQLOperations()}>GraphQlOperations</Link>`
      </p>
    </>
  )
}

export default GraphQLOperationsPage
