import { useLazyQuery } from '@apollo/client'
import { Button } from '@tremor/react'
import {
  OGTagPreviewProviderAudit,
  OGTagPreviewResponse,
  PerformanceMetric,
} from 'types/graphql'

import { RefreshIcon } from 'src/icons/Icons'

const OG_TAG_PREVIEW_QUERY = gql`
  query OGTagPreview($url: String!, $customUserAgent: String) {
    ogTagPreview(url: $url, customUserAgent: $customUserAgent) {
      id
      userAgent
      error
      result
      audits {
        provider
        audit {
          severity
          messages
        }
      }
      metrics {
        startTime
        executionTime
        responseTime
        responseSize
      }
    }
  }
`

interface Props {
  url: string
  customUserAgent: string
  setAudits: (audits: OGTagPreviewProviderAudit[] | null) => void
  setResult: (result: OGTagPreviewResponse['result'] | null) => void
  setMetrics: (metrics: PerformanceMetric | null) => void
  setError: (error: Error | null) => void
}

export const PreviewButton = ({
  url,
  customUserAgent,
  setAudits,
  setResult,
  setMetrics,
  setError,
}: Props) => {
  const [getOGTagPreview, { loading, data }] = useLazyQuery(
    OG_TAG_PREVIEW_QUERY,
    {
      fetchPolicy: 'no-cache',
      onCompleted: () => {
        setAudits(data?.ogTagPreview.audits)
        setResult(data?.ogTagPreview.result)
        setMetrics(data?.ogTagPreview.metrics)
      },
      onError: (error) => {
        console.log(error)
        setError(error)
        setAudits(null)
        setResult(null)
        setMetrics(null)
      },
    }
  )

  if (loading) {
    setError(null)
    setAudits(null)
    setResult(null)
    setMetrics(null)

    return (
      <div>
        <Button disabled={true} icon={RefreshIcon} loading={true}>
          Loading...
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <Button
        icon={RefreshIcon}
        onClick={() => getOGTagPreview({ variables: { url, customUserAgent } })}
      >
        Preview
      </Button>
    </div>
  )
}
