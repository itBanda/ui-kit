import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../icon'
import { Select } from './Select'

const meta = {
  component: Select,
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    className: 'w-[210px]',
    disabled: false,
    id: '',
    label: 'Select-box',
    onValueChange: () => {},
    options: [
      {
        icon: <Icon className='inline' icon='paypal' />,
        label: 'Option 1',
        value: 'option1',
      },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Russian', value: 'ru' },
      { label: 'English', value: 'en' },
    ],
    placeholder: 'Choose option',
    value: 'ru',
  },
  render: args => {
    const [value, setValue] = useState<string>('')

    return <Select {...args} onValueChange={setValue} value={value} />
  },
}
