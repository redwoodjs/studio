import { Metadata } from '@redwoodjs/web'

import ConfigurationCell from 'src/components/ConfigurationCell'

const ConfigurationPage = () => {
  return (
    <>
      <Metadata title="Configuration" description="Configuration page" />
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Configuration
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Studio configuration settings.
      </p>
      <ConfigurationCell />
    </>
  )
}

export default ConfigurationPage
