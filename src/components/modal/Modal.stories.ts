import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  component: Modal,
  title: 'Modal',
} satisfies Meta<typeof Modal>

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'some text',
    title: 'some title',
  },
}
