import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DatePicker } from './DatePicker'

const meta = {
  component: DatePicker,
  title: 'Components/Date picker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerExample: Story = {
  args: {
    captionLayout: 'dropdown',
    disabled: false,
    label: 'Date of birth',
    mode: 'single',
    width: 160,
  },
  render: args => {
    const [date, setDate] = useState<Date>()

    return <DatePicker {...args} onSelect={setDate} selected={date} />
  },
}
