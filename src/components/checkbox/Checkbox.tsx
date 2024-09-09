import { ComponentProps, forwardRef, useId } from 'react'

import { cn } from '../../../src/utils'
import { Icon } from '../icon/Icon'

type CheckboxProps = {
  id?: string
  label?: string
} & ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, id, label, ...props }, ref) => {
    const uniqueId = useId()
    const checkboxId = id ?? uniqueId

    return (
      <label
        className={cn(
          'group relative flex cursor-pointer items-center gap-0.5 disabled:cursor-not-allowed disabled:opacity-50'
        )}
        htmlFor={checkboxId}
      >
        <div
          className={cn(
            'relative h-10 w-10 rounded-full transition-colors duration-200',
            {
              'group-focus-within:bg-dark-500 group-hover:bg-dark-300 group-active:bg-dark-100':
                !props.disabled,
            }
          )}
        >
          <input
            checked={checked}
            className={cn(
              'absolute h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed'
            )}
            disabled={props.disabled}
            id={checkboxId}
            onChange={props.onChange}
            ref={ref}
            type='checkbox'
            {...props}
          />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-sm border-2 border-light-500 bg-black transition-all duration-200 disabled:bg-dark-100',
              {
                'bg-light-100': checked,
              },
              { 'border-none bg-dark-100': props.disabled }
            )}
          >
            {checked && (
              <Icon
                className={cn(
                  'absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform text-dark-900',
                  { 'cursor-not-allowed text-light-700': props.disabled }
                )}
                icon='checkmark-outline'
              />
            )}
          </span>
        </div>
        {label && (
          <span
            className={cn('text-sm font-normal text-white', {
              'cursor-not-allowed text-light-900': props.disabled,
            })}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)
