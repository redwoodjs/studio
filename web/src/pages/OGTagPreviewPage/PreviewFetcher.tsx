import {
  Callout,
  Card,
  Flex,
  SearchSelect,
  SearchSelectItem,
  TextInput,
} from '@tremor/react'
import {
  OGTagPreviewProviderAudit,
  OGTagPreviewResponse,
  PerformanceMetric,
} from 'types/graphql'

import { ErrorIcon, EyeIcon, LinkIcon } from 'src/icons/Icons'

import { PreviewButton } from './PreviewButton'
import { TOP_USER_AGENTS } from './userAgents'

interface Props {
  url: string
  customUserAgent: string
  setUrl: (url: string | null) => void
  setCustomUserAgent: (customUserAgent: string | null) => void
  setAudits: (audits: OGTagPreviewProviderAudit[] | null) => void
  setResult: (result: OGTagPreviewResponse['result'] | null) => void
  setMetrics: (performanceMetric: PerformanceMetric | null) => void
  error: Error
  setError: (error: Error | null) => void
}

export const PreviewFetcher = ({
  url,
  setUrl,
  customUserAgent,
  setCustomUserAgent,
  setAudits,
  setResult,
  setMetrics,
  error,
  setError,
}: Props) => {
  return (
    <Card className="h-full w-full">
      <Flex flexDirection="row" className="space-x-4">
        <Flex flexDirection="col" className="grow space-y-4">
          <div className="w-full">
            <TextInput
              icon={LinkIcon}
              placeholder="URL of page to preview"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="w-full">
            <SearchSelect
              icon={EyeIcon}
              value={customUserAgent || ''}
              onValueChange={setCustomUserAgent}
            >
              {TOP_USER_AGENTS.map((agent) => {
                return (
                  <SearchSelectItem key={agent} value={agent}>
                    {agent}
                  </SearchSelectItem>
                )
              })}
            </SearchSelect>
          </div>
        </Flex>
        <div className="h-full">
          <PreviewButton
            url={url}
            customUserAgent={customUserAgent}
            setAudits={setAudits}
            setResult={setResult}
            setMetrics={setMetrics}
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
