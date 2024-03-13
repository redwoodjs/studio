import { ViewerPayload } from 'src/rscParser/main'

export const FlightPayloadViewer = ({ payload }) => {
  return <ViewerPayload defaultPayload={payload} />
}
