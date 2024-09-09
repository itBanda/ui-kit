import { PropsWithChildren } from 'react'

import { cn } from '../../utils'

export const Card = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        'w-fit rounded-sm border border-dark-300 bg-dark-500 p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
