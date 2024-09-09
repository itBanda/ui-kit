import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox'

const meta = {
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const CheckboxTemplate = (args: any) => {
  return <Checkbox {...args} />
}

export const Default: Story = {
  args: {
    checked: true,
    id: '123',
    label: 'Check-box',
  },
  render: CheckboxTemplate,
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    id: '123',
    label: 'Check-box',
  },
  render: CheckboxTemplate,
}
