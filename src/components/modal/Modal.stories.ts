import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'some text',
    isOpened: true,
    title: 'Components/Modal',
  },
}
