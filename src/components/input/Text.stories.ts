import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { CommonOptions } from './commonTypes'
const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
const commonOptions: CommonOptions = {
  placeholder: 'enter text',
  type: 'text',
}

export const Default: StoryObj<typeof meta> = {
  args: {
    disabled: false,
    ...commonOptions,
    value: 'some value',
  },
}

export const Error: StoryObj<typeof meta> = {
  args: {
    disabled: false,
    errorText: 'Error text',
    ...commonOptions,
  },
}
