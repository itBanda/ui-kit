import { Meta } from '@storybook/react'

import { Button } from './Button'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
export const Primary = {
  args: {
    children: 'Button',
    disabled: true,
  },
}
export const Secondary = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'secondary',
  },
}
export const Outlined = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'outlined',
  },
}
export const Text = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'text',
  },
}
