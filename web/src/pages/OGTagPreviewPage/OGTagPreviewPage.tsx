import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import {
  Title,
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

import { Metadata } from '@redwoodjs/web'

import {
  CodeBracketIcon,
  ErrorIcon,
  EyeIcon,
  LinkIcon,
  RectangleStackIcon,
  RefreshIcon,
} from 'src/icons/Icons'

const OG_TAG_PREVIEW_QUERY = gql`
  query OGTagPreview($url: String!, $customUserAgent: String) {
    ogTagPreview(url: $url, customUserAgent: $customUserAgent) {
      id
      userAgent
      error
      result
    }
  }
`

function isValidHttpUrl(possibleURL: string) {
  let url
  try {
    url = new URL(possibleURL)
  } catch (_error) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}

const OgTagPreviewPage = () => {
  const [url, setUrl] = useState('http://localhost:8910/')
  const [customUserAgent, setCustomUserAgent] = useState<string | null>(null)

  const [getOGTagPreview, ogTagPreviewQuery] =
    useLazyQuery(OG_TAG_PREVIEW_QUERY)

  const executeFetch = async (url: string, customUserAgent: string | null) => {
    if (!isValidHttpUrl(url)) {
      return
    }
    await getOGTagPreview({
      variables: { url, customUserAgent },
    })
  }

  return (
    <>
      <Metadata title="OgTagPreview" description="OgTagPreview page" />

      <Title>OG Tag Preview</Title>
      <Text>
        Examine the OG tags present on your pages without the need to deploy
        your app.
      </Text>

      <Grid numItemsLg={3} className="mt-6 gap-6">
        {/* Input/Config */}
        <Col numColSpanLg={3}>
          <Card className="h-full">
            <Flex flexDirection="row" className="space-x-6">
              <Flex flexDirection="col" className="grow space-y-6">
                <div className="w-full">
                  <TextInput
                    icon={LinkIcon}
                    placeholder="Test URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyUp={async (e) => {
                      if (e.key === 'Enter') {
                        await executeFetch(url, customUserAgent)
                      }
                    }}
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    icon={EyeIcon}
                    placeholder="Custom user-agent (optional)"
                    value={customUserAgent || ''}
                    onChange={(e) => setCustomUserAgent(e.target.value)}
                    onKeyUp={async (e) => {
                      if (e.key === 'Enter') {
                        await executeFetch(url, customUserAgent)
                      }
                    }}
                  />
                </div>
              </Flex>
              <div className="h-full">
                <Button
                  className="h-full"
                  icon={RefreshIcon}
                  onClick={async () => executeFetch(url, customUserAgent)}
                  disabled={!isValidHttpUrl(url)}
                >
                  Fetch
                </Button>
              </div>
            </Flex>
          </Card>
        </Col>

        {/* OG tag results */}
        {ogTagPreviewQuery.loading ? (
          <Col numColSpanLg={3}>
            <Card className="h-full p-6">Loading...</Card>
          </Col>
        ) : ogTagPreviewQuery.error ? (
          <Col numColSpanLg={3}>
            <Card className="h-full p-6">
              <Callout title="Error" icon={ErrorIcon} color="rose">
                <div className="h-full w-full overflow-x-auto">
                  <pre className="text-gray-500 dark:text-gray-600">
                    {JSON.stringify(ogTagPreviewQuery.error, undefined, 2)}
                  </pre>
                </div>
              </Callout>
            </Card>
          </Col>
        ) : (
          <Col numColSpanLg={3}>
            <Card className="h-full p-6">
              <TabGroup>
                <TabList>
                  <Tab icon={CodeBracketIcon}>Raw</Tab>
                  <Tab icon={RectangleStackIcon}>Pretty</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="h-full w-full overflow-x-auto">
                      <pre className="text-gray-500 dark:text-gray-600">
                        {JSON.stringify(
                          ogTagPreviewQuery.data?.ogTagPreview.result ??
                            'No data',
                          undefined,
                          2
                        )}
                      </pre>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <Flex flexDirection="col">
                      <div className="pt-4">
                        <Text>Not yet implemented...</Text>
                      </div>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Card>
          </Col>
        )}
      </Grid>
    </>
  )
}

export default OgTagPreviewPage
