import { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  component: Card,
  title: 'Card',
} satisfies Meta<typeof Card>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    backgroundColor: 'bg-[#171717]',
    border: 'border border-solid border-[#333333]',
    borderRadius: 'rounded-sm',
    //   boxShadow,
    // children: 'stroka',
    height: 200,
    margin: 'm-6',
    padding: 'p-4',
    textColor: 'text-light-100',
    width: 200,
  },
}
