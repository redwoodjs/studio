import 'json-bigint-patch'
import React, { useMemo, useState } from 'react'

import { useExplorerPlugin } from '@graphiql/plugin-explorer'
import type { Fetcher, FetcherOpts, FetcherParams } from '@graphiql/toolkit'
import type { LoadFromUrlOptions } from '@graphql-tools/url-loader'
import { SubscriptionProtocol, UrlLoader } from '@graphql-tools/url-loader'
import type { GraphiQLProps } from 'graphiql'
import { GraphiQL, GraphiQLInterface, GraphiQLProvider } from 'graphiql'
import type { DocumentNode } from 'graphql'
import { Kind, parse } from 'graphql'
import { useUrlSearchParams } from 'use-url-search-params'

import 'graphiql/graphiql.css'
import '@graphiql/plugin-explorer/dist/style.css'
import './styles.css'

const getOperationWithFragments = (
  document: DocumentNode,
  operationName?: string
): DocumentNode => {
  const definitions = document.definitions.filter((definition) => {
    if (
      definition.kind === Kind.OPERATION_DEFINITION &&
      operationName &&
      definition.name?.value !== operationName
    ) {
      return false
    }
    return true
  })

  return {
    kind: Kind.DOCUMENT,
    definitions,
  }
}

export type RedwoodGraphiQLProps = Omit<
  GraphiQLProps,
  | 'fetcher'
  | 'isHeadersEditorEnabled'
  | 'defaultEditorToolsVisibility'
  | 'onToggleDocs'
  | 'toolbar'
  | 'onSchemaChange'
  | 'query'
  | 'onEditQuery'
> &
  Partial<Omit<LoadFromUrlOptions, 'headers'>> & {
    title?: string
    /**
     * Extra headers you always want to pass with users' headers input
     */
    additionalHeaders?: LoadFromUrlOptions['headers']
  }

export function RedwoodGraphiQL(
  props: RedwoodGraphiQLProps
): React.ReactElement {
  //   const initialQuery = /* GraphQL */ `#
  // # Welcome to ${props.title || 'Yoga GraphiQL'}
  // #
  // # ${
  //     props.title || 'Redwood GraphiQL'
  //   } is an in-browser tool for writing, validating, and
  // # testing GraphQL queries.
  // #
  // # Type queries into this side of the screen, and you will see intelligent
  // # typeaheads aware of the current GraphQL type schema and live syntax and
  // # validation errors highlighted within the text.
  // #
  // # GraphQL queries typically start with a "{" character. Lines that start
  // # with a # are ignored.
  // #
  // # An example GraphQL query might look like:
  // #
  // #     {
  // #       field(arg: "value") {
  // #         subField
  // #       }
  // #     }
  // #
  // # Keyboard shortcuts:
  // #
  // #  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
  // #
  // #     Merge Query:  Shift-Ctrl-M (or press the merge button above)
  // #
  // #       Run Query:  Ctrl-Enter (or press the play button above)
  // #
  // #   Auto Complete:  Ctrl-Space (or just start typing)
  // #
  // `

  const endpoint = props.endpoint || ''

  const type = {
    query: String,
  }

  const urlLoader = useMemo(() => new UrlLoader(), [])

  const fetcher: Fetcher = useMemo(() => {
    const headers = props.additionalHeaders || {}

    const executor = urlLoader.getExecutorAsync(endpoint, {
      subscriptionsProtocol: SubscriptionProtocol.SSE,
      credentials: 'same-origin',
      specifiedByUrl: true,
      directiveIsRepeatable: true,
      fetch: window.fetch,
      ...props,
      headers,
    })

    return function fetcher(graphQLParams: FetcherParams, opts?: FetcherOpts) {
      const document = getOperationWithFragments(
        parse(graphQLParams.query),
        graphQLParams.operationName ?? undefined
      )

      headers['rw-studio-impersonation-cookie'] =
        opts?.headers?.cookie || opts?.headers?.Cookie

      return executor({
        document,
        operationName: graphQLParams.operationName ?? undefined,
        variables: graphQLParams.variables,
        extensions: {
          headers: opts?.headers,
        },
      })
    }
  }, [urlLoader, endpoint, props])

  const [params, setParams] = useUrlSearchParams(
    {
      query: props.defaultQuery || '',
    },
    type,
    false
  )

  const [query, setQuery] = useState(
    params.query?.toString() || props.defaultQuery || ''
  )
  const explorerPlugin = useExplorerPlugin({
    query,
    onEdit: setQuery,
    showAttribution: false,
  })

  return (
    <div className="graphiql-container">
      <GraphiQLProvider
        plugins={[explorerPlugin]}
        query={query}
        headers={props.headers}
        schemaDescription={true}
        fetcher={fetcher}
      >
        <GraphiQLInterface
          isHeadersEditorEnabled
          defaultEditorToolsVisibility
          onEditQuery={(query) =>
            setParams({
              query,
            })
          }
        >
          <GraphiQL.Logo>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>{props?.title ? props.title : <>GraphiQL</>}</span>
            </div>
          </GraphiQL.Logo>
        </GraphiQLInterface>
      </GraphiQLProvider>
    </div>
  )
}
