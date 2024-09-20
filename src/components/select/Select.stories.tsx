import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../icon'
import { Select } from './Select'

const meta = {
  component: Select,
  title: 'Components/mySelect',
} satisfies Meta<typeof Select>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    className: 'w-[210px] ',
    disabled: false,
    id: '',
    label: 'Select-box',
    options: [
      {
        icon: <Icon className='inline' icon='paypal' />,
        label: 'Option 1',
        value: 'option1',
      },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Choose option',
  },
}
