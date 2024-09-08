import { forwardRef, useId } from 'react'

import { cn } from '../../utils'
import { InputProps } from './types/inputTypes'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, disabled, errorText, iconEnd, iconStart, id, label, ...props },
    ref
  ) => {
    const commonStyleIcon = disabled ? 'text-dark-100' : 'text-light-100'
    const myId = useId()

    return (
      <div className='flex flex-col'>
        {label && (
          <label
            className={cn('text-sm text-light-900', {
              'text-dark-100': disabled,
            })}
          >
            {label}
          </label>
        )}
        <div
          className={cn('relative max-w-[280px]', {
            'cursor-not-allowed': disabled,
          })}
        >
          {iconStart && (
            <div
              className={cn(
                'absolute left-3 top-1/2 -translate-y-1/2',
                {
                  'pointer-events-none': disabled,
                },
                commonStyleIcon
              )}
            >
              {iconStart}
            </div>
          )}
          <input
            disabled={disabled}
            id={id ?? myId}
            ref={ref}
            {...props}
            className={cn(
              'w-full rounded-sm border border-dark-100 bg-transparent px-3 py-[6px] text-base text-light-100 transition placeholder:text-light-900',
              'enabled:focus:hover:border-transparent',
              'disabled:cursor-not-allowed disabled:text-dark-100 disabled:placeholder:text-dark-100',
              'focus:border-transparent focus:outline-none focus:ring-1 focus:ring-accent-500',
              { 'pr-10': iconEnd },
              { 'pl-10': iconStart },
              {
                'border-danger-500 focus:border-danger-500 focus:ring-0 enabled:focus:hover:border-danger-500':
                  errorText,
              },
              { 'enabled:hover:border-light-900': !errorText },
              { 'border-dark-100': disabled },
              className
            )}
          />
          {iconEnd && (
            <div
              className={cn(
                `absolute right-3 top-1/2 -translate-y-1/2`,
                {
                  'pointer-events-none': disabled,
                },
                commonStyleIcon
              )}
            >
              {iconEnd}
            </div>
          )}
        </div>
        {errorText && <p className='text-sm text-danger-500'>{errorText}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'
