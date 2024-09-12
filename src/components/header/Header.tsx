import { ReactNode } from 'react'

import { Button } from '../button'
import { Icon } from '../icon'
import Typography from '../typography/Typography'

type Props = {
  isLoggedIn: boolean
}

export const Header = ({ isLoggedIn }: Props) => {
  return (
    <div className='flex w-full justify-center bg-dark-700'>
      <div className='flex w-[1280px] place-content-between border-b border-dark-300 bg-transparent px-16 py-3'>
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
    <div className='flex items-center space-x-6'>
      <Icon color='white' icon='outline-bell' />
      <select className='' id='' name=''>
        <option value='wddw'>english</option>
        <option value='dwwd'>russia</option>
      </select>
    </div>
  )
}

export const PublicHeader = () => {
  return (
    <div className='flex items-center space-x-6'>
      <select id='' name='wddw'>
        <option value='wddw'>english</option>
        <option value='dwwd'>russia</option>
      </select>
      <AuthenticationButtons />
    </div>
  )
}

export const AuthenticationButtons = () => {
  return (
    <div className=''>
      <Button className='ml-6' variant='text'>
        Log In
      </Button>
      <Button className='ml-6' variant='primary'>
        Sign up
      </Button>
    </div>
  )
}
