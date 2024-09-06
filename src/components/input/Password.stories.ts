import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { CommonOptions } from './commonTypes'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
const commonOptions: CommonOptions = {
  label: 'password',
  placeholder: 'enter password',
  type: 'password',
}

export const Default: StoryObj<typeof meta> = {
  args: {
    disabled: false,
    ...commonOptions,
  },
}
export const Error: StoryObj<typeof meta> = {
  args: {
    disabled: false,
    errorText: 'Error text',
    ...commonOptions,
  },
}
