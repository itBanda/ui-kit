import { ComponentProps } from 'react'

import { useGetId } from '@/hooks'
import { cn } from '@/utils'

type TextAreaProps = {
  errorText?: string
  label?: string
} & ComponentProps<'textarea'>
export const TextArea = ({ errorText, label, ...props }: TextAreaProps) => {
  const id = useGetId(props.id)

  return (
    <div className='flex flex-col'>
      {label && (
        <label
          className={cn('text-sm text-light-900 peer-disabled:text-light-100')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'focus:border-primary-700 peer h-20 w-full rounded-md border border-dark-100 bg-dark-500 p-2 text-sm text-light-900 outline-none transition-all focus:text-light-100 active:border-light-100 active:text-light-100 disabled:text-light-100'
        )}
        id={id}
        {...props}
      />
      {errorText && (
        <span className={cn('text-sm text-danger-500')}>{errorText}</span>
      )}
    </div>
  )
}
