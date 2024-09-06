import { ComponentProps, useId, useState } from 'react'

import { cn } from '../../utils/cn'
import { Icon } from '../icon/Icon'

export type InputProps = {
  errorText?: string
  id?: string
  label?: string
  value: string
} & ComponentProps<'input'>

export const Input = ({
  disabled,
  errorText,
  id,
  label,
  placeholder,
  type,
  ...props
}: InputProps) => {
  const [currentType, setCurrentType] = useState(type)

  const myId = useId()

  const setVisibleHandler = () => {
    if (type === 'password' && !disabled) {
      setCurrentType(currentType === 'password' ? 'text' : 'password')
    }
  }

  const iconAlignment = type === 'search' ? 'flex-row-reverse justify-end' : ''
  const iconColor = disabled ? 'text-dark-100' : 'text-light-100'

  return (
    <>
      {label && (
        <label className='block text-sm text-light-900' htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cn('relative h-9 max-w-[280px]', `${iconAlignment}`)}>
        <input
          autoComplete='off' // for disabled dropdown list
          className={cn(
            'h-full w-full rounded-sm border border-dark-100 bg-transparent p-2 text-light-900 outline-none',
            `${errorText && 'border-danger-500'}`,
            `focus:text-light-100`,
            'focus:border-accent-500',
            'disabled:cursor-not-allowed disabled:border-dark-100',
            `hover:border-light-900`,
            `${errorText && 'hover:border-danger-500 focus:border-danger-500'}`,
            'disabled:text-dark-100 disabled:placeholder-dark-100',
            !errorText &&
              'enabled:focus:[box-shadow:inset_0_0_0_0.5px_#397df6,0_0_0_0.5px_#397df6]',
            'focus:bg-transparent'
          )}
          disabled={disabled}
          id={id ?? myId}
          placeholder={placeholder}
          type={currentType}
          value={props.value}
        />
        <div
          className={`absolute right-1 top-[2px] m-1 ${disabled ? '-z-10' : ''}`}
          onClick={setVisibleHandler}
        >
          {type === 'password' && currentType === 'password' && (
            <Icon className={iconColor} icon='eye-off-outline' />
          )}
          {type === 'password' && currentType === 'text' && (
            <Icon className={iconColor} icon='eye-outline' />
          )}
          {type === 'search' && (
            <Icon className={iconColor} icon='search-outline' />
          )}
        </div>
      </div>
      {errorText && <p className='text-sm text-danger-500'>{errorText}</p>}
    </>
  )
}
