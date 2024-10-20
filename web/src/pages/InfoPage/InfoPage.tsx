import { Metadata } from '@redwoodjs/web'

import InfoCell from 'src/components/InfoCell'

const InfoPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Studio configuration and settings. You can change most of these settings
        by updating your <samp>redwood.toml</samp> file.
      </p>
      <InfoCell />
    </>
  )
}

export default InfoPage
