import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import {
  Title,
  Subtitle,
  Grid,
  Col,
  Card,
  Text,
  Flex,
  Button,
  TextInput,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Callout,
} from '@tremor/react'

import { Metadata, useQuery } from '@redwoodjs/web'

import { Previewer } from 'src/components/OGTagPreviewers/Previewer'
import {
  CodeBracketIcon,
  ErrorIcon,
  EyeIcon,
  LinkIcon,
  RectangleStackIcon,
  RefreshIcon,
} from 'src/icons/Icons'

import type {
  OGTagPreviewProviderAudit,
  OGTagPreviewResponse,
} from '../../../types/graphql'

const SSR_STATUS_QUERY = gql`
  query SsrStatusQuery {
    status: userProjectConfig {
      id
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
    }
  }
`

const PreviewButton = ({
  url,
  customUserAgent,
  setAudits,
  setResult,
  setError,
}: {
  url: string
  customUserAgent: string
  setAudits: (audits: OGTagPreviewProviderAudit[] | null) => void
  setResult: (result: OGTagPreviewResponse['result'] | null) => void
  setError: (error: Error | null) => void
}) => {
  const [getOGTagPreview, { loading, data }] = useLazyQuery(
    OG_TAG_PREVIEW_QUERY,
    {
      fetchPolicy: 'no-cache',
      onCompleted: () => {
        setAudits(data?.ogTagPreview.audits)
        setResult(data?.ogTagPreview.result)
      },
      onError: (error) => {
        console.log(error)
        setError(error)
        setAudits(null)
        setResult(null)
      },
    }
  )

  if (loading) {
    setError(null)
    setAudits(null)
    setResult(null)

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

const PreviewFetcher = ({
  url,
  setUrl,
  customUserAgent,
  setCustomUserAgent,
  setAudits,
  setResult,
  error,
  setError,
}: {
  url: string
  customUserAgent: string
  setUrl: (url: string | null) => void
  setCustomUserAgent: (customUserAgent: string | null) => void
  setAudits: (audits: OGTagPreviewProviderAudit[] | null) => void
  setResult: (result: OGTagPreviewResponse['result'] | null) => void
  error: Error
  setError: (error: Error | null) => void
}) => {
  return (
    <Card className="h-full w-full">
      <Flex flexDirection="row" className="space-x-4">
        <Flex flexDirection="col" className="grow space-y-6">
          <div className="w-full">
            <TextInput
              icon={LinkIcon}
              placeholder="Test URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="w-full">
            <TextInput
              icon={EyeIcon}
              placeholder="Custom user-agent (optional)"
              value={customUserAgent || ''}
              onChange={(e) => setCustomUserAgent(e.target.value)}
            />
          </div>
        </Flex>
        <div className="h-full">
          <PreviewButton
            url={url}
            customUserAgent={customUserAgent}
            setAudits={setAudits}
            setResult={setResult}
            setError={setError}
          />
        </div>
      </Flex>
      {error && <ErrorSection error={error} />}
    </Card>
  )
}

const ErrorSection = ({ error }: { error: Error }) => {
  return (
    error && (
      <Callout title="Error" icon={ErrorIcon} color="rose" className="mt-4">
        {error.message}
      </Callout>
    )
  )
}

const ResultPanel = ({
  result,
}: {
  result: OGTagPreviewResponse['result']
}) => {
  return (
    result && (
      <TabPanel>
        <div className="h-full w-full overflow-x-auto">
          <pre className="text-gray-500 dark:text-gray-600">
            {JSON.stringify(result ?? 'No data', undefined, 2)}
          </pre>
        </div>
      </TabPanel>
    )
  )
}

const PrettyResultPanel = ({
  result,
  audits,
}: {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
}) => {
  if (!result || !audits) {
    return (
      <TabPanel>
        <Card className="h-full p-6">
          <Callout title="Sorry" icon={ErrorIcon} color="amber">
            Unable to preview
          </Callout>
        </Card>
      </TabPanel>
    )
  }

  return (
    <TabPanel>
      <Subtitle>
        See how your website will look on social media platforms. This live
        preview ensures your metadata aligns with your content and branding.
      </Subtitle>
      <Grid numItems={2} numItemsLg={3} numItemsMd={2} className="gap-4 py-4">
        {audits.map((providerAudit) => {
          return (
            <Col key={`{providerAudit.provider}-preview-col`}>
              <Card className="h-full w-full">
                <Title className="border-b-1 mb-2 border-tremor-brand font-semibold capitalize text-tremor-content">
                  {providerAudit.provider.toLowerCase()} Preview
                </Title>
                <Previewer result={result} providerAudit={providerAudit} />
              </Card>
            </Col>
          )
        })}
      </Grid>
    </TabPanel>
  )
}

const PreviewTabs = ({
  result,
  audits,
}: {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
}) => {
  return (
    result &&
    audits && (
      <Card className="h-full w-full p-6">
        <TabGroup>
          <TabList>
            <Tab icon={RectangleStackIcon}>Previews</Tab>
            <Tab icon={CodeBracketIcon}>Data</Tab>
          </TabList>
          <TabPanels>
            <PrettyResultPanel result={result} audits={audits} />
            <ResultPanel result={result} />
          </TabPanels>
        </TabGroup>
      </Card>
    )
  )
}
const OgTagPreviewPage = () => {
  const [url, setUrl] = useState('http://localhost:8910/blog-post/2')
  const [customUserAgent, setCustomUserAgent] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [result, setResult] = useState<OGTagPreviewResponse['result'] | null>(
    null
  )
  const [audits, setAudits] = useState<OGTagPreviewProviderAudit[] | null>(null)
  const [showDisabledSection, setShowDisabledSection] = useState(false)
  const [showPreviewFetcherSection, setShowPreviewFetcherSection] =
    useState(false)

  const { loading, data, error: ssrError } = useQuery(SSR_STATUS_QUERY)

  if (ssrError) {
    console.error('Failed to load SSR configuration', ssrError)
    // setError(ssrError)
    setShowDisabledSection(true)
  }

  if (loading) {
    console.debug('Loading SSR configuration')
  }

  if (!loading && data.status.ssr.enabled.status === false) {
    console.debug('SSR is disabled')
    setShowDisabledSection(true)
    setShowPreviewFetcherSection(false)
  }

  if (!loading && data.status.ssr.enabled.status === true) {
    console.debug('SSR is enabled')
    setShowDisabledSection(false)
    setShowPreviewFetcherSection(true)
  }

  return (
    <div className="space-y-4">
      <Metadata title="OG Tag Preview" description="Preview OpenGraph tags" />
      <Title>OG Tag Preview</Title>
      <Text>
        Examine the OG tags present on your pages without the need to deploy
        your app.
      </Text>

      {showDisabledSection && <div>disabled</div>}
      {showPreviewFetcherSection && (
        <Callout title="SSR is not enabled" color="rose" icon={ErrorIcon}>
          Please{' '}
          <a
            href="https://community.redwoodjs.com/t/react-streaming-and-server-side-rendering-ssr/5052"
            target="_blank"
            rel="noreferrer"
          >
            enable SSR
          </a>{' '}
          in your project to preview OpenGraph tags.
        </Callout>
      )}

      {showPreviewFetcherSection && (
        <>
          <PreviewFetcher
            url={url}
            setUrl={setUrl}
            customUserAgent={customUserAgent}
            setCustomUserAgent={setCustomUserAgent}
            setAudits={setAudits}
            setResult={setResult}
            error={error}
            setError={setError}
          />
          <PreviewTabs result={result} audits={audits} />
        </>
      )}
    </div>
  )
}

export default OgTagPreviewPage
