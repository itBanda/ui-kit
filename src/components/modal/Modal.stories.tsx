import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
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
  render: args => {
    const [isShow, setIsShow] = useState(true)
    const handleClick = () => {
      setIsShow(false)
    }

    return (
      <div>
        <Button onClick={() => setIsShow(true)} variant='secondary'>
          Open
        </Button>
        <Modal {...args} isOpened={isShow} onClose={handleClick}>
          asd
        </Modal>
      </div>
    )
  },
}
