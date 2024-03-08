import { useState } from 'react'

import { Title, Text, Callout } from '@tremor/react'
import type {
  OGTagPreviewProviderAudit,
  OGTagPreviewResponse,
  PerformanceMetric,
} from 'types/graphql'

import { Metadata, useQuery } from '@redwoodjs/web'

import { ErrorIcon } from 'src/icons/Icons'

import { PreviewFetcher } from './PreviewFetcher'
import { PreviewTabs } from './PreviewTabs'

const PROJECT_CONFIG_QUERY = gql`
  query UserProjectConfigQuery {
    config: userProjectConfig {
      id
      web {
        id
        host
        port
        apiUrl
      }
      ssr {
        id
        enabled {
          status
          message
        }
      }
    }
  }
`

const OgTagPreviewPage = () => {
  const [url, setUrl] = useState<string>('')
  const [showPreviewer, setShowPreviewer] = useState<boolean | null>(null)
  const [customUserAgent, setCustomUserAgent] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [result, setResult] = useState<OGTagPreviewResponse['result'] | null>(
    null
  )
  const [audits, setAudits] = useState<OGTagPreviewProviderAudit[] | null>(null)
  const [metrics, setMetrics] = useState<PerformanceMetric | null>(null)

  useQuery(PROJECT_CONFIG_QUERY, {
    onCompleted(data) {
      if (data.config) {
        if (data.config.ssr) {
          setShowPreviewer(data.config.ssr.enabled.status)
        }

        if (data.config.web) {
          setUrl(`http://${data.config.web.host}:${data.config.web.port}`)
        }
      }
    },

    onError(error) {
      console.error('Failed to load user project configuration', error)
    },
  })

  return (
    <div className="space-y-4">
      <Metadata title="OG Tag Preview" description="Preview OpenGraph tags" />
      <Title>OG Tag Preview</Title>
      <Text>
        Examine the OG tags present on your pages without the need to deploy
        your app.
      </Text>

      {!showPreviewer && (
        <Callout title="SSR is not enabled" color="rose" icon={ErrorIcon}>
          Please{' '}
          <a
            href="https://community.redwoodjs.com/t/react-streaming-and-server-side-rendering-ssr/5052"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline"
          >
            enable SSR
          </a>{' '}
          in your project to preview OpenGraph tags.
        </Callout>
      )}

      {showPreviewer && (
        <>
          <PreviewFetcher
            url={url}
            setUrl={setUrl}
            customUserAgent={customUserAgent}
            setCustomUserAgent={setCustomUserAgent}
            setAudits={setAudits}
            setResult={setResult}
            setMetrics={setMetrics}
            error={error}
            setError={setError}
          />
          <PreviewTabs
            result={result}
            audits={audits}
            metrics={metrics}
            userAgent={customUserAgent}
          />
        </>
      )}
    </div>
  )
}

export default OgTagPreviewPage
