import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  logo: ReactNode
}

export const Header = ({ children, logo }: Props) => {
  return (
    <header className='border-b border-dark-300 bg-dark-700 p-0'>
      <div className='container mx-auto flex max-w-screen-xl place-content-between justify-between bg-transparent px-16 py-3'>
        {logo}
        {children}
      </div>
    </header>
  )
}
