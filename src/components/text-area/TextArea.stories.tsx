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
    defaultValue: 'Text area',
    label: 'Text-Area',
  },
}

export const Error: StoryObj<typeof meta> = {
  args: {
    defaultValue: 'Text area',
    errorText: 'Error text',
    label: 'Text-Area',
  },
}

export const Disabled: StoryObj<typeof meta> = {
  args: {
    defaultValue: 'Text area',
    disabled: true,
    label: 'Text-Area',
  },
}
