import { StoryObj } from '@storybook/react'
export type CommonOptions = {
  label?: string
  placeholder: string
  type: string
}

export type Story<MetaType> = StoryObj<MetaType>
