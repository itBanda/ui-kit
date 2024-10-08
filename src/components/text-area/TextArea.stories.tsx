import React from 'react'

import { TextArea } from '@/components/text-area/TextArea'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    label: 'Text-Area',
    value: 'Text area',
  },
}
