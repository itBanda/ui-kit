import { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  component: Card,
  title: 'Card',
} satisfies Meta<typeof Card>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'dwdwdw',
  },
}
