import { ComponentProps, forwardRef } from 'react'

import { useGetId } from '@/hooks'
import { cn } from '@/utils'

type TextAreaProps = {
  errorText?: string
  label?: string
} & ComponentProps<'textarea'>
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ disabled, errorText, label, ...props }, ref) => {
    const id = useGetId(props.id)

    return (
      <div className='flex flex-col'>
        {label && (
          <label
            className={cn('text-sm text-light-900', {
              'text-dark-100': disabled,
            })}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'custom-scrollbar focus:border-primary-700 w-full min-w-[284px] resize-none rounded-md border border-dark-100 bg-transparent p-2 text-sm text-light-900 outline-none transition-all scrollbar-thin focus:border-accent-700 focus:text-light-100 active:border-light-100 active:text-light-100 disabled:cursor-not-allowed disabled:text-dark-100',
            {
              'border-danger-500 text-light-100': errorText,
            }
          )}
          disabled={disabled}
          id={id}
          ref={ref}
          {...props}
        />
        {errorText && (
          <span className={cn('text-sm text-danger-500')}>{errorText}</span>
        )}
      </div>
    )
  }
)
TextArea.displayName = 'TextArea'
