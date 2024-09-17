import React from 'react'

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
    disabled: false,
    id: '',
    label: 'Select-box',
    options: [
      {
        icon: <Icon icon='paypal' />,
        id: 'Biba',
        name: 'Biba',
      },
      {
        icon: <Icon icon='paypal' />,
        id: 'Boba',
        name: 'Boba',
      },
      {
        id: 'Aboba',
        name: 'Aboba',
      },
    ],
    width: 210,
  },
}
