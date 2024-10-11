import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/utils'

type Props = {
  className?: string
} & ComponentProps<'aside'>

export const SideBar = forwardRef<HTMLElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        className={cn(
          'flex w-[220px] justify-center overflow-y-auto border-r border-dark-300',
          {
            className,
          }
        )}
        ref={ref}
        {...props}
      >
        {children}
      </aside>
    )
  }
)
SideBar.displayName = 'SideBar'
