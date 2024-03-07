import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'
import {
  OGTagPreviewProviderAudit,
  OGTagPreviewResponse,
  PerformanceTiming,
} from 'types/graphql'

import {
  CodeBracketIcon,
  RectangleStackIcon,
  PerformanceTimingIcon,
} from 'src/icons/Icons'

import { PrettyResultPanel } from './PrettyResultPanel'
import { PreviewData } from './PreviewData'
import { PreviewPerformance } from './PreviewPerformance'
interface Props {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
  performanceTiming: PerformanceTiming
  userAgent?: string
}

export const PreviewTabs = ({
  result,
  audits,
  performanceTiming,
  userAgent,
}: Props) => {
  if (!result || !audits) {
    return null
  }

  return (
    <Card className="h-full w-full p-6">
      <TabGroup>
        <TabList>
          <Tab icon={RectangleStackIcon}>Previews</Tab>
          <Tab icon={CodeBracketIcon}>Data</Tab>
          <Tab icon={PerformanceTimingIcon}>Performance</Tab>
        </TabList>
        <TabPanels>
          <PrettyResultPanel
            result={result}
            audits={audits}
            userAgent={userAgent}
          />
          <TabPanel>
            <PreviewData result={result} />
          </TabPanel>
          <TabPanel>
            <PreviewPerformance performanceTiming={performanceTiming} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
