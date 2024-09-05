import { Meta } from '@storybook/react'

import { Input } from './Input'
import { CommonOptions, Story } from './commonTypes'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
const commonOptions: CommonOptions = {
  label: 'email',
  placeholder: 'enter email',
  type: 'text',
}

export const Default: Story<typeof meta> = {
  args: {
    ...commonOptions,
  },
}
export const Error: Story<typeof meta> = {
  args: {
    errorText: 'Error text',
    ...commonOptions,
  },
}
