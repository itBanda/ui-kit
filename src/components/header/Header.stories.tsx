import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: { isLoggedIn: true },
}
