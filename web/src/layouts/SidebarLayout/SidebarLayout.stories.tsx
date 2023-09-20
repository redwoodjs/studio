import type { Meta, StoryObj } from '@storybook/react'

import SidebarLayout from './SidebarLayout'

const meta: Meta<typeof SidebarLayout> = {
  component: SidebarLayout,
}

export default meta

type Story = StoryObj<typeof SidebarLayout>

export const Primary: Story = {}
