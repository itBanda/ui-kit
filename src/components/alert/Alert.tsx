import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/utils'

import { Icon } from '../icon'

export type AlertProps = {
  isOpened: boolean
  message: string
  onClose: () => void
  type: 'error' | 'success' | 'warning'
} & ComponentProps<'div'>
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, isOpened, message, onClose, type }, ref) => {
    if (!isOpened) {
      return null
    }

    return (
      <div
        className={cn(
          'flex h-12 w-[387px] flex-row justify-between border px-[24px] pb-[12px] pt-[12px] text-light-100',
          {
            'border-danger-500 bg-danger-900': type === 'error',
            'border-success-500 bg-success-900': type === 'success',
            'border-warning-500 bg-warning-900': type === 'warning',
            className,
          }
        )}
        ref={ref}
      >
        <span>
          {type === 'error' && <b>Error! </b>}
          {message}
        </span>
        {onClose && (
          <Icon
            color='white'
            cursor='pointer'
            icon='close-outline'
            onClick={onClose}
          />
        )}
      </div>
    )
  }
)
Alert.displayName = 'Alert'
