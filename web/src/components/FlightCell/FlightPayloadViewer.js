import { ViewerPayload } from 'src/rscParser/components/ViewerPayload'

export const FlightPayloadViewer = ({ payload }) => {
  return <ViewerPayload defaultPayload={payload} />
}
