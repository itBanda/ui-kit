import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Check-box',
  },
}
