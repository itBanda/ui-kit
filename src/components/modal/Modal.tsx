import { ComponentProps, PropsWithChildren, ReactNode, useState } from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'

export type ModalProps = {
  children: ReactNode
  className?: string
  isOpened: boolean
  title: string
} & ComponentProps<'div'>

export const Modal = ({
  children,
  className,
  isOpened,
  title,
}: ModalProps & PropsWithChildren<{ className?: string }>) => {
  const [isOpen, setIsOpen] = useState(isOpened)

  return isOpen ? (
    <div
      className={cn(
        'w-fit divide-y-[1px] divide-dark-100 rounded-sm border border-dark-100 bg-dark-300'
      )}
    >
      <div className='flex flex-row justify-between px-[24px] pb-[11px] pt-[12px]'>
        <h3 className='text-xl font-bold leading-[36px] text-light-100'>
          {title}
        </h3>
        <Icon
          className='mt-[7px]'
          color='white'
          icon='close-outline'
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className={cn('flex flex-col px-[24px] text-white', className)}>
        {children}
      </div>
    </div>
  ) : null
}
