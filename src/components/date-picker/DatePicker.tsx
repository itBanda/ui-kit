import { forwardRef } from 'react'
import {
  DayPicker,
  DayPickerProps,
  PropsSingle,
  getDefaultClassNames,
} from 'react-day-picker'

import { Icon } from '@/components/icon'
import { Input } from '@/components/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import { useGetId } from '@/hooks'
import { cn } from '@/utils'
import { format } from 'date-fns'

import 'react-day-picker/style.css'

type Props = {
  dateFormat?: string
  disabled?: boolean
  errorText?: string
  id?: string
  label?: string
  width?: number
} & PropsSingle

const defaultClassNames = getDefaultClassNames()
const modifiers: DayPickerProps['modifiers'] = {
  weekend: day => day.getDay() === 0 || day.getDay() === 6,
}

export const DatePicker = forwardRef<HTMLInputElement, Props>(
  (
    {
      dateFormat = 'dd/MM/yyyy',
      disabled,
      errorText,
      id: propsId,
      label,
      width,
      ...props
    },
    ref
  ) => {
    const id = useGetId(propsId)
    const value = props.selected
      ? format(props.selected, dateFormat)
      : format(new Date(), dateFormat)

    return (
      <Popover>
        <PopoverTrigger
          asChild
          className='text-left data-[state=open]:bg-dark-500'
        >
          <Input
            disabled={disabled}
            errorText={errorText}
            iconEnd={<Icon icon='calendar-outline' />}
            id={id}
            label={label}
            placeholder='enter date'
            ref={ref}
            value={value}
            width={width}
          />
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className='w-auto rounded-sm border-none p-0 shadow-none'
          sideOffset={1}
        >
          <DayPicker
            {...props}
            classNames={{
              ...defaultClassNames,
              button_next: cn(
                'size-9 bg-dark-100 rounded-full flex items-center justify-center transition',
                'hover:bg-dark-300'
              ),
              button_previous: cn(
                'size-9 bg-dark-100 rounded-full flex items-center justify-center transition',
                'hover:bg-dark-300'
              ),
              caption_label: cn(
                defaultClassNames.caption_label,
                'text-light-100 text-base font-bold'
              ),
              chevron: cn('fill-white size-5'),
              day: cn('rounded-full transition', 'hover:bg-accent-700'),
              month_caption: cn(defaultClassNames.month_caption, 'pl-2 mb-3 '),
              outside: cn(
                '!text-light-900 rounded-full transition',
                'hover:bg-accent-700'
              ),
              root: cn(
                defaultClassNames.root,
                'px-6 py-4 bg-dark-500 text-light-100 border border-dark-300 rounded-sm'
              ),
              selected: cn('bg-accent-900 rounded-full text-light-100'),
              today: cn(
                '!text-accent-500 rounded-full transition',
                'data-[selected=true]:!text-light-100',
                'hover:bg-accent-700 text-accent-100'
              ),
              weekday: cn(
                'text-base font-normal leading-10 p-0 text-light-900'
              ),
            }}
            modifiers={modifiers}
            modifiersClassNames={{
              weekend: cn(
                'text-danger-300 rounded-full transition',
                'data-[selected=true]:!text-light-100',
                'hover:bg-accent-700'
              ),
            }}
            showOutsideDays
            weekStartsOn={1}
          />
        </PopoverContent>
      </Popover>
    )
  }
)

DatePicker.displayName = 'Datepicker'
