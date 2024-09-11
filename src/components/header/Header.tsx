import { ReactNode } from 'react'

import { Button } from '../button'
import { Icon } from '../icon'
import Typography from '../typography/Typography'

type Props = {
  isLoggedIn: boolean
  language?: ReactNode
}

export const Header = ({ isLoggedIn, language }: Props) => {
  return (
    <div className='flex w-full justify-center bg-dark-700'>
      <div className='flex w-[1280px] place-content-between space-x-0 border-b border-dark-300 bg-transparent px-16 py-3'>
        <Typography.TextSemiboldXl className='font-inter text-light-100'>
          Inctagram
        </Typography.TextSemiboldXl>
        {isLoggedIn ? <LoggedInHeader /> : <PublicHeader />}
      </div>
    </div>
  )
}

export const LoggedInHeader = () => {
  return (
    <div className='flex space-x-6'>
      <Icon color='white' icon='outline-bell' />
      <select id='' name=''>
        <option value='wddw'>eng</option>
        <option value='dwwd'>ru</option>
      </select>
    </div>
  )
}

export const PublicHeader = () => {
  return (
    <div className='flex space-x-6'>
      <select id='' name='wddw'>
        <option value='wddw'>eng</option>
        <option value='dwwd'>ru</option>
      </select>
      <Button variant='text'>Log In</Button>
      <Button variant='primary'>Sign up</Button>
    </div>
  )
}
