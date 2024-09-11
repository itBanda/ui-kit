import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../icon'
import { Input } from './Input'
const meta = {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    disabled: true,
    errorText: '',
    // iconStart: (
    //   <Icon cursor='pointer' height={20} icon='search-outline' width={20} />
    // ), // not deleted
    placeholder: 'enter text',
  },
}
