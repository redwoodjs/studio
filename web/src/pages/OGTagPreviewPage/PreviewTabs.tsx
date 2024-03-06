import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@tremor/react'
import { OGTagPreviewProviderAudit, OGTagPreviewResponse } from 'types/graphql'

import { CodeBracketIcon, RectangleStackIcon } from 'src/icons/Icons'

import { PrettyResultPanel } from './PrettyResultPanel'

interface Props {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
  userAgent?: string
}

export const PreviewTabs = ({ result, audits, userAgent }: Props) => {
  if (!result || !audits) {
    return null
  }

  return (
    <Card className="h-full w-full p-6">
      <TabGroup>
        <TabList>
          <Tab icon={RectangleStackIcon}>Previews</Tab>
          <Tab icon={CodeBracketIcon}>Data</Tab>
        </TabList>
        <TabPanels>
          <PrettyResultPanel
            result={result}
            audits={audits}
            userAgent={userAgent}
          />
          <TabPanel>
            <div className="h-full w-full overflow-x-auto">
              <pre className="text-gray-500 dark:text-gray-600">
                {JSON.stringify(result, undefined, 2)}
              </pre>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}
