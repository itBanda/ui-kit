import { Meta } from '@storybook/react'

import { Input } from './Input'
import { CommonOptions, Story } from './commonTypes'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
const commonOptions: CommonOptions = {
  label: 'search',
  placeholder: 'enter params',
  type: 'search',
}

export const Default: Story<typeof meta> = {
  args: {
    ...commonOptions,
    disabled: false,
  },
}
export const Error: Story<typeof meta> = {
  args: {
    ...commonOptions,
    disabled: false,
    errorText: 'Error message',
  },
}
