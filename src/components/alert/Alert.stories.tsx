import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    isOpened: false,
    message: 'some message',
    type: 'error',
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpened)
    const handleClick = () => {
      setIsOpen(false)
    }

    return (
      <div>
        {isOpen ? (
          <Alert {...args} isOpened={isOpen} onClose={handleClick} />
        ) : (
          <Button onClick={() => setIsOpen(true)}>Open Alert</Button>
        )}
      </div>
    )
  },
}
