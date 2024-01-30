import { Metadata } from '@redwoodjs/web'

import SettingsCell from 'src/components/SettingsCell'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />

      <h1>SettingsPage</h1>
      <SettingsCell />
    </>
  )
}

export default SettingsPage
