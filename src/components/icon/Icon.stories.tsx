import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Icon, IconName } from './Icon'
import { icons } from './icons'

const meta = {
  component: Icon,
  title: 'Components/Icon',
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icons: Story = {
  args: {
    icon: 'eye',
  },
  render: args => {
    return (
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(30px,auto))] gap-2'>
        {Object.keys(icons).map(icon => (
          <Icon key={icon} {...args} icon={icon as IconName} />
        ))}
      </div>
    )
  },
}
