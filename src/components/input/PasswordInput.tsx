import { forwardRef, useState } from 'react'

import { Icon } from '../icon'
import { Input } from './Input'
import { InputProps } from './types/inputTypes'

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { disabled, label = 'password', placeholder = 'enter password', ...props },
    ref
  ) => {
    const [visible, setVisible] = useState(true)

    return (
      <Input
        {...props}
        disabled={disabled}
        iconEnd={
          <Icon
            cursor='pointer'
            icon={visible ? 'eye-outline' : 'eye-off-outline'}
            onClick={() => setVisible(!visible)}
          />
        }
        label={label}
        placeholder={placeholder}
        ref={ref}
        type={visible ? 'text' : 'password'}
      />
    )
  }
)
PasswordInput.displayName = 'PasswordInput'
