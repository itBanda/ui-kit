import { ComponentProps, PropsWithChildren, forwardRef, useEffect } from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'

export type ModalProps = {
  isOpened: boolean
  onClose: () => void
  title: string
} & ComponentProps<'div'>

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ children, className, isOpened, onClose, title }, ref) => {
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }

      window.addEventListener('keydown', handleEscape)

      return () => {
        window.removeEventListener('keydown', handleEscape)
      }
    }, [onClose])

    if (!isOpened) {
      return null
    }

    return (
      <div
        className='fixed inset-0 z-50 flex items-center justify-center bg-light-900 bg-opacity-60'
        onClick={onClose}
      >
        <div
          aria-labelledby='modal-title'
          className={cn(
            'w-full max-w-[378px] divide-y-[1px] divide-dark-100 rounded-sm border border-dark-100 bg-dark-300',
            className
          )}
          onClick={e => e.stopPropagation()}
          ref={ref}
          role='dialog'
          tabIndex={-1}
        >
          <div className='flex flex-row justify-between px-[24px] pb-[11px] pt-[12px]'>
            <h3 className='text-xl font-bold leading-[36px] text-light-100'>
              {title}
            </h3>
            <Icon
              className='mt-[7px]'
              color='white'
              cursor='pointer'
              icon='close-outline'
              onClick={onClose}
            />
          </div>
          <div className={cn('flex flex-col px-[24px] py-[30px] text-white')}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Modal.displayName = 'Modal'
