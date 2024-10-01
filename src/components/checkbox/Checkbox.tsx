import { ComponentProps, forwardRef } from 'react'

import { useGetId } from '../../hooks/useGetId'
import { cn } from '../../utils/cn'
import { Icon } from '../icon/Icon'

type CheckboxProps = {
  label?: string
} & ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, disabled, label, ...props }, ref) => {
    const id = useGetId(props.id)

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
            checked={checked}
            className={cn(
              'peer h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed'
            )}
            disabled={disabled}
            id={id}
            ref={ref}
            type='checkbox'
            {...props}
          />

          <span
            className={cn(
              'pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-sm border-2 bg-transparent transition-all duration-100 peer-checked:bg-light-100 peer-disabled:cursor-not-allowed peer-disabled:border-dark-100 peer-disabled:bg-dark-100 peer-disabled:text-light-700',
              {
                'peer-disabled:border-light-900 peer-disabled:bg-transparent':
                  !checked && disabled,
              }
            )}
          >
            {checked && (
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
            htmlFor={id}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
