import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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
  const [checked, setChecked] = useState(args.checked)

  const handleChange = () => {
    setChecked(!checked)
  }

  return <Checkbox {...args} checked={checked} onChange={handleChange} />
}

export const Default: Story = {
  args: {
    checked: true,
    label: 'Check-box',
    onChange: () => {},
  },
  render: CheckboxTemplate,
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Check-box',
    onChange: () => {},
  },
  render: CheckboxTemplate,
}
