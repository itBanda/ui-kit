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
  title: 'Example/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const CheckboxTemplate = (args: any) => {
  return (
    <div className='flex h-40 w-96 items-center justify-center bg-black'>
      <Checkbox {...args} />
    </div>
  )
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
    checked: false,
    disabled: true,
    id: '123',
    label: 'Check-box',
  },
  render: CheckboxTemplate,
}
