import { Tabs } from '@/components/tabs/Tabs'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    tabsData: [
      { content: 'dvsdfgdf', title: 'tab1', value: 'tab1' },
      { content: 'dvsdfgdf', title: 'tab2', value: 'tab2' },
      { content: 'dvsdfgdf', title: 'tab3', value: 'tab3' },
      { content: 'dvsdfgdf', title: 'tab4', value: 'tab4' },
    ],
  },
}
export const Disabled: StoryObj<typeof meta> = {
  args: {
    tabsData: [
      { content: 'dvsdfgdf', disabled: true, title: 'tab1', value: 'tab1' },
      { content: 'dvsdfgdf', disabled: true, title: 'tab2', value: 'tab2' },
    ],
  },
}
