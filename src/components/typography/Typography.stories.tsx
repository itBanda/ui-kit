import { Meta, StoryObj } from '@storybook/react'

import Typography from './Typography'
import { typographies } from './constants'

const meta = {
  component: Typography.H1,
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.H1>

export default meta

type Story = StoryObj<typeof meta>

export const TypographyExamples: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-4'>
        {typographies.map(({ Component, href, title }) => (
          <div className='flex gap-8' key={title}>
            <Component className='basis-2/12'>{title}</Component>
            <Component className='basis-1/2' href={href}>
              Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
            </Component>
          </div>
        ))}
      </div>
    )
  },
}
