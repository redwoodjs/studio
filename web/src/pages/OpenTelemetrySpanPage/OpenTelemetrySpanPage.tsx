import { MetaTags } from '@redwoodjs/web'

import SpanCell from 'src/components/SpanCell'

const OpenTelemetrySpanPage = ({ id }: { id: string }) => {
  return (
    <>
      <MetaTags
        title="OpenTelemetrySpan"
        description="OpenTelemetrySpan page"
      />

      <SpanCell id={id} />
    </>
  )
}

export default OpenTelemetrySpanPage
