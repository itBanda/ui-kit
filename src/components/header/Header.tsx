import { ReactNode, forwardRef } from 'react'

import { cn } from '../../utils'

type Props = {
  children: ReactNode
  className?: string
  logo: ReactNode
}

export const Header = forwardRef<HTMLElement, Props>(
  ({ children, className, logo }, ref) => {
    return (
      <header
        className={cn('border-b border-dark-300 bg-dark-700 p-0', {
          className,
        })}
        ref={ref}
      >
        <div className='container mx-auto flex max-w-screen-xl place-content-between justify-between bg-transparent px-16 py-3'>
          {logo}
          {children}
        </div>
      </header>
    )
  }
)

Header.displayName = 'Header'
