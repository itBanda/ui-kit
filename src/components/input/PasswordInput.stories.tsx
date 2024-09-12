import { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './PasswordInput'
const meta = {
  component: PasswordInput,
  title: 'Input',
} satisfies Meta<typeof PasswordInput>

export default meta

export const Password: StoryObj<typeof meta> = {
  args: {
    disabled: true,
    errorText: 'Error text',
    width: 280,
  },
}
