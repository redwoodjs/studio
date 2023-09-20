import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import {
  CodeIcon,
  CollectionIcon,
  EyeIcon,
  LinkIcon,
  RefreshIcon,
} from '@heroicons/react/outline'
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
} from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

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

const OgTagPreviewPage = () => {
  const [url, setUrl] = useState('')
  const [customUserAgent, setCustomUserAgent] = useState<string | null>(null)

  const [getOGTagPreview, ogTagPreviewQuery] =
    useLazyQuery(OG_TAG_PREVIEW_QUERY)

  return (
    <>
      <MetaTags title="OgTagPreview" description="OgTagPreview page" />

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
              <Button
                icon={RefreshIcon}
                onClick={async () => {
                  await getOGTagPreview({ variables: { url, customUserAgent } })
                }}
              >
                Reload
              </Button>
            </Flex>
          </Card>
        </Col>

        {/* OG tag results */}
        {ogTagPreviewQuery.loading ? (
          <Col numColSpanLg={3}>
            <Card className="h-full p-6">Loading...</Card>
          </Col>
        ) : (
          ogTagPreviewQuery.data && (
            <Col numColSpanLg={3}>
              <Card className="h-full p-6">
                <TabGroup>
                  <TabList>
                    <Tab icon={CodeIcon}>Raw</Tab>
                    <Tab icon={CollectionIcon}>Pretty</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <div className="h-full w-full overflow-x-auto">
                        <pre className="text-gray-500 dark:text-gray-600">
                          {JSON.stringify(
                            ogTagPreviewQuery.data?.ogTagPreview.result,
                            undefined,
                            2
                          )}
                        </pre>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <Flex flexDirection="col">
                        <div>
                          <Text>Not yet implemented...</Text>
                        </div>
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </Card>
            </Col>
          )
        )}
      </Grid>
    </>
  )
}

export default OgTagPreviewPage
