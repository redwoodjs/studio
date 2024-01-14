import type { Meta, StoryObj } from '@storybook/react'

import GraphiqlPage from './GraphiqlPage'

const meta: Meta<typeof GraphiqlPage> = {
  component: GraphiqlPage,
}

export default meta

type Story = StoryObj<typeof GraphiqlPage>

export const Primary: Story = {}
