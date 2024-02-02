import { Metadata } from '@redwoodjs/web'

import SettingsCell from 'src/components/SettingsCell'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Studio configuration settings.
      </p>
      <SettingsCell />
    </>
  )
}

export default SettingsPage
