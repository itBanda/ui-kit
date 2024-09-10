import { ComponentProps, forwardRef, useId } from 'react'

import { cn } from '../../../src/utils'
import { Icon } from '../icon/Icon'

type CheckboxProps = {
  label?: string
} & ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, label, ...props }, ref) => {
    const uniqueId = useId()
    const checkboxId = props.id || uniqueId

    return (
      <div className={cn('group flex items-center gap-0.5')}>
        <div
          className={cn(
            'relative h-10 w-10 rounded-full transition-colors duration-200',
            {
              'group-focus-within:bg-dark-500 group-hover:bg-dark-300 group-active:bg-dark-100':
                !disabled,
            }
          )}
        >
          <input
            className={cn(
              'peer h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed'
            )}
            disabled={disabled}
            id={checkboxId}
            ref={ref}
            type='checkbox'
            {...props}
          />

          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-sm border-2 border-light-500 bg-black transition-all duration-200 peer-checked:bg-light-100 peer-disabled:cursor-not-allowed peer-disabled:border-none peer-disabled:bg-dark-100 peer-disabled:text-light-700'
            )}
          >
            {props.checked && (
              <Icon
                className={cn(
                  'absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer',
                  {
                    'cursor-not-allowed': disabled,
                  }
                )}
                icon='checkmark-outline'
              />
            )}
          </span>
        </div>
        {label && (
          <label
            className={cn('cursor-pointer text-sm font-normal text-white', {
              'cursor-not-allowed text-light-900': disabled,
            })}
            htmlFor={checkboxId}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
