import { Metadata } from '@redwoodjs/web'

import InfoCell from 'src/components/InfoCell'

const InfoPage = () => {
  return (
    <>
      <Metadata title="Info" description="Info page" />
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Info
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Various studio configuration information and settings.
      </p>
      <InfoCell />
    </>
  )
}

export default InfoPage
