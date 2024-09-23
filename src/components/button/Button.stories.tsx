import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

type Story = StoryObj<typeof meta>

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
export const LinkAsButton = {
  args: {
    asChild: true,
    children: <a href='#'>Link</a>,
    disabled: true,
    variant: 'primary',
  },
}
