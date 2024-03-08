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
  PerformanceMetric,
} from 'types/graphql'

import {
  CodeBracketIcon,
  RectangleStackIcon,
  PerformanceMetricIcon,
} from 'src/icons/Icons'

import { PrettyResultPanel } from './PrettyResultPanel'
import { PreviewData } from './PreviewData'
import { PreviewPerformance } from './PreviewPerformance'
interface Props {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
  metrics: PerformanceMetric
  userAgent?: string
}

export const PreviewTabs = ({ result, audits, metrics, userAgent }: Props) => {
  if (!result || !audits) {
    return null
  }

  return (
    <Card className="h-full w-full p-6">
      <TabGroup>
        <TabList>
          <Tab icon={RectangleStackIcon}>Previews</Tab>
          <Tab icon={CodeBracketIcon}>Data</Tab>
          <Tab icon={PerformanceMetricIcon}>Performance</Tab>
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
            <PreviewPerformance metrics={metrics} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
