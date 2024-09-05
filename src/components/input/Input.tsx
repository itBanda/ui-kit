import { ComponentProps, useId, useState } from 'react'

import { cn } from '../../utils/cn'
import { Icon } from '../icon/Icon'

export type InputProps = {
  errorText?: string
  icon?: string
  label?: string
} & ComponentProps<'input'>

export const Input = ({
  disabled,
  errorText,
  icon,
  label,
  placeholder,
  type,
}: InputProps) => {
  const [currentType, setCurrentType] = useState(type)
  const id = useId()

  const setVisibleHandler = () => {
    if (type === 'password') {
      setCurrentType(currentType === 'password' ? 'text' : 'password')
    }
  }

  const positionIcon = type === 'search' ? 'flex-row-reverse justify-end' : ''

  return (
    <>
      {label && (
        <label className='block text-sm text-light-900' htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={cn(
          'relative inline-flex h-9 items-center rounded-sm border border-dark-100 text-light-900',
          'hover:border-light-900',
          'active:border-light-100',
          'active:text-light-100',
          'focus-within:border-accent-500',
          `${positionIcon}`,
          `${disabled && 'text-dark-100'}`,
          `${errorText && 'border-danger-500'}`
        )}
      >
        <input
          className={cn(
            'm-1 w-60 border-none bg-transparent text-light-900',
            'active:text-light-100',
            'focus:bg-transparent focus:outline-none',
            'disabled:cursor-not-allowed',
            // 'disabled:custom-block-cursor',
            `${errorText && 'text-light-100'}`,
            `${disabled && 'text-dark-100'}`
          )}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          type={currentType}
        ></input>
        <div className='m-1' onClick={setVisibleHandler}>
          {type === 'password' && currentType === 'password' && (
            <Icon color='light-100' icon='eye-off-outline' />
          )}
          {type === 'password' && currentType === 'text' && (
            <Icon color='light-100' icon='eye-outline' />
          )}
          {type === 'search' && (
            <Icon color='light-100' icon='search-outline' />
          )}
        </div>
      </div>
      {errorText && (
        <span className='block text-sm text-danger-500'>{errorText}</span>
      )}
    </>
  )
}
