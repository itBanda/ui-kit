import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from 'react'

import { useGetId } from '@/hooks'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../utils/cn'
import { Option } from './types'

export const Select = forwardRef<
  ElementRef<typeof SelectPrimitive.Root>,
  {
    className?: string
    id: string
    label?: string
    onValueChange?: (value: string) => void
    options: Option[]
    placeholder?: string
    value?: string
  } & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
>(
  (
    {
      className,
      id: propsId,
      label,
      onValueChange,
      options,
      placeholder,
      value,
      ...props
    },
    ref
  ) => {
    const id = useGetId(propsId)

    const [selectedValue, setSelectedValue] = useState<string | undefined>(
      value
    )

    const handleValueChange = (value: string) => {
      setSelectedValue(value)
      if (onValueChange) {
        onValueChange(value)
      }
    }

    const selectedOption = options.find(
      option => option.value === selectedValue
    )

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label
            className={cn('cursor-pointer text-sm text-light-900')}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <SelectPrimitive.Root
          {...props}
          onValueChange={handleValueChange}
          value={selectedValue}
        >
          <SelectPrimitive.Trigger
            className={cn(
              'group flex w-full cursor-pointer items-center justify-between rounded-sm border border-dark-100 bg-transparent px-3 py-[5px] text-light-900 outline-none',
              'data-[state=open]:rounded-b-none data-[state=open]:border-b-0 data-[state=open]:border-light-100 data-[state=open]:bg-dark-500',
              { 'text-light-100': label },
              'hover:text-light-900',
              'focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-accent-500',
              'data-[state=open]:ring-0',
              'disabled:cursor-not-allowed disabled:border-dark-100 disabled:text-dark-100'
            )}
            id={id}
            ref={ref}
          >
            {selectedOption ? (
              <span className='flex items-center gap-3'>
                {selectedOption.icon && <>{selectedOption.icon}</>}
                {selectedOption.label}
              </span>
            ) : (
              <span className='text-dark-400'>
                {placeholder || 'Select an option'}
              </span>
            )}
            <SelectPrimitive.Icon asChild>
              <ChevronDown className='group-hover:text-light-100 group-disabled:text-dark-100 group-data-[state=open]:rotate-180' />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                'rounded-b-sm border border-light-100 bg-dark-500 text-light-100',
                className
              )}
              position='popper'
            >
              <SelectPrimitive.Viewport>
                {options.map(option => (
                  <SelectPrimitive.Item
                    className={cn(
                      'flex gap-3 px-3 py-1.5 outline-none',
                      'hover:bg-dark-300 hover:text-accent-500',
                      'data-[highlighted]:bg-dark-300 data-[highlighted]:text-accent-500'
                    )}
                    key={option.value}
                    value={option.value}
                  >
                    {option.icon}
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    )
  }
)

Select.displayName = 'Select'
