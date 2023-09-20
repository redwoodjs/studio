import React, { useEffect, useRef, useState } from 'react'

import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
} from '@heroicons/react/outline'
import {
  DocumentReportIcon,
  DocumentTextIcon,
  CodeIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline'
import {
  Text,
  Card,
  Button,
  Flex,
  Select,
  SelectItem,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Italic,
} from '@tremor/react'

import ErrorPanel from '../ErrorPanel/ErrorPanel'

// Note: the "+2" is to account for the borders
const PREVIEW_DIMENSIONS = [
  {
    label: 'Desktop',
    width: null,
    height: null,
    icon: DesktopComputerIcon,
  },
  {
    label: 'iPhone 12 Pro',
    width: 390 + 2,
    height: 844 + 2,
    icon: DeviceMobileIcon,
  },
  {
    label: 'Pixel 5',
    width: 393 + 2,
    height: 851 + 2,
    icon: DeviceMobileIcon,
  },
  {
    label: 'iPad Air',
    width: 820 + 2,
    height: 1180 + 2,
    icon: DeviceTabletIcon,
  },
  {
    label: 'Surface Pro 7',
    width: 912 + 2,
    height: 1368 + 2,
    icon: DeviceTabletIcon,
  },
]

function MailPreview({
  html,
  text,
  error,
  additionalTabHeaders,
  additionalTabPanels,
}: {
  html: string | null
  text: string | null
  error?: unknown
  additionalTabHeaders?: React.ReactElement
  additionalTabPanels?: React.ReactElement[]
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [selectedPreviewDimension, setSelectedPreviewDimension] = useState(
    PREVIEW_DIMENSIONS[0]
  )
  const [isPreviewHorizontal, setIsPreviewHorizontal] = useState(false)
  const [iframeWidth, setIframeWidth] = useState<string>('100%')
  const [iframeHeight, setIframeHeight] = useState<string>('100%')
  const [iframeContentHeight, setIframeContentHeight] = useState<number>(0)

  useEffect(() => {
    if (selectedPreviewDimension.label === 'Desktop') {
      setIframeWidth('100%')
      setIframeHeight(`${iframeContentHeight}px`)
    } else {
      if (isPreviewHorizontal) {
        setIframeWidth(`${selectedPreviewDimension.height}px`)
        setIframeHeight(`${selectedPreviewDimension.width}px`)
      } else {
        setIframeWidth(`${selectedPreviewDimension.width}px`)
        setIframeHeight(`${selectedPreviewDimension.height}px`)
      }
    }
  }, [selectedPreviewDimension, isPreviewHorizontal, iframeContentHeight])

  // Note: I just couldn't get the iframe to resize properly on its own
  //       so I'm just going to poll and update the height if it changes
  setInterval(() => {
    setIframeContentHeight(
      (iframeRef.current?.contentWindow?.document.body?.scrollHeight ?? 0) + 82
    )
  }, 250)

  const preprocessedHTML =
    html?.replace(
      '</head>',
      "<base target='_blank'><meta http-equiv='Content-Security-Policy' content=\"script-src 'none'\"></head>"
    ) ?? ''

  if (error) {
    return <ErrorPanel error={error} />
  }

  return (
    <Card>
      <TabGroup index={selectedTabIndex} onIndexChange={setSelectedTabIndex}>
        <Flex alignItems="center" className="space-x-2">
          <TabList className="flex-1">
            <Tab icon={DocumentReportIcon}>HTML</Tab>
            <Tab icon={DocumentTextIcon}>Text</Tab>
            <Tab icon={CodeIcon}>Raw HTML</Tab>
            {additionalTabHeaders ?? <></>}
          </TabList>
          <div className="flex justify-end space-x-2">
            <Select
              value={selectedPreviewDimension.label}
              onValueChange={(v) =>
                setSelectedPreviewDimension(
                  PREVIEW_DIMENSIONS.find((d) => d.label === v) ??
                    PREVIEW_DIMENSIONS[0]
                )
              }
            >
              {PREVIEW_DIMENSIONS.map((entry) => (
                <SelectItem
                  key={entry.label}
                  value={entry.label}
                  icon={entry.icon}
                >
                  {entry.label}
                </SelectItem>
              ))}
            </Select>
            <Button
              variant="secondary"
              onClick={() => setIsPreviewHorizontal(!isPreviewHorizontal)}
              disabled={selectedPreviewDimension.label === 'Desktop'}
            >
              <SwitchHorizontalIcon
                className={`h-5 w-5 ${isPreviewHorizontal ? '' : 'rotate-90'}`}
              />
            </Button>
          </div>
        </Flex>
        <TabPanels>
          <TabPanel>
            {preprocessedHTML ? (
              <div hidden={selectedTabIndex !== 0} className="overflow-auto">
                <iframe
                  title="Mail Preview"
                  ref={iframeRef}
                  className="mx-auto border border-gray-600"
                  width={iframeWidth}
                  height={iframeHeight}
                  srcDoc={preprocessedHTML}
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                  // @ts-expect-error Does this propertly not exist? I thought it was a thing
                  csp="script-src 'none'"
                />
              </div>
            ) : (
              <Text className="w-full pt-6 text-center">
                <Italic>No HTML version available</Italic>
              </Text>
            )}
          </TabPanel>
          <TabPanel>
            <Flex className="mt-2 overflow-auto">
              {text ? (
                <pre className="text-gray-500 dark:text-gray-600">{text}</pre>
              ) : (
                <Text className="w-full pt-6 text-center">
                  <Italic>No text version available</Italic>
                </Text>
              )}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex className="mt-2 overflow-auto">
              {html ? (
                <pre className="text-gray-500 dark:text-gray-600">{html}</pre>
              ) : (
                <Text className="w-full pt-6 text-center">
                  <Italic>No HTML version available</Italic>
                </Text>
              )}
            </Flex>
          </TabPanel>
          {additionalTabPanels?.map((panel, index) => (
            <TabPanel key={index}>{panel}</TabPanel>
          )) ?? <></>}
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default MailPreview
