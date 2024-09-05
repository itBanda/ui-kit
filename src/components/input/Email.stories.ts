import { Meta } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
const commonOptions = {
  label: 'email',
  placeholder: 'enter email',
  type: 'text',
}

export const Default = {
  args: {
    ...commonOptions,
    variant: 'default',
  },
}
export const Active = {
  args: {
    ...commonOptions,
    variant: 'active',
  },
}
export const Disabled = {
  args: {
    ...commonOptions,
    variant: 'disabled',
  },
}
export const Error = {
  args: {
    errorText: 'some error',
    ...commonOptions,
    variant: 'error',
  },
}
export const Focus = {
  args: {
    ...commonOptions,
    variant: 'focus',
  },
}
export const Hover = {
  args: {
    ...commonOptions,
    variant: 'hover',
  },
}
