import {
  Callout,
  Card,
  Col,
  Grid,
  Subtitle,
  TabPanel,
  Title,
} from '@tremor/react'
import { OGTagPreviewProviderAudit, OGTagPreviewResponse } from 'types/graphql'

import { Previewer } from 'src/components/OGTagPreviewers/Previewer'
import { ErrorIcon } from 'src/icons/Icons'

interface Props {
  result: OGTagPreviewResponse['result']
  audits: OGTagPreviewProviderAudit[]
  userAgent?: string
}

export const PrettyResultPanel = ({ result, audits, userAgent }: Props) => {
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
                <Previewer
                  result={result}
                  providerAudit={providerAudit}
                  userAgent={userAgent}
                />
              </Card>
            </Col>
          )
        })}
      </Grid>
    </TabPanel>
  )
}
