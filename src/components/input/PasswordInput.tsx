import { forwardRef, useState } from 'react'

import { Icon } from '../icon'
import { Input } from './Input'
import { InputProps } from './types'

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { disabled, label = 'Password', placeholder = 'Enter password', ...props },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <Input
        disabled={disabled}
        iconEnd={
          <Icon
            cursor='pointer'
            icon={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        }
        label={label}
        placeholder={placeholder}
        ref={ref}
        type={isPasswordVisible ? 'text' : 'password'}
        {...props}
      />
    )
  }
)
PasswordInput.displayName = 'PasswordInput'
