import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Icon } from '../icon'
import Typography from '../typography/Typography'
import { Header } from './Header'

const meta = {
  component: Header,
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta

export const Public: StoryObj<typeof meta> = {
  args: {
    children: <PublicHeader />,
    logo: (
      <Typography.TextSemiboldXl className='text-light-100'>
        <a href='some path'>Inctagram</a>
      </Typography.TextSemiboldXl>
    ),
  },
}
export const LoggedIn: StoryObj<typeof meta> = {
  args: {
    children: <LoggedInHeader notificationsCount={4} />,
    logo: (
      <Typography.TextSemiboldXl className='text-light-100'>
        <a href='some path'>Inctagram</a>
      </Typography.TextSemiboldXl>
    ),
  },
}

function LoggedInHeader({
  notificationsCount = 0,
}: {
  notificationsCount: number
}) {
  return (
    <div className='flex items-center space-x-12'>
      <div className='relative'>
        <Icon color='white' icon='outline-bell' />
        {notificationsCount > 0 && (
          <span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white'>
            {notificationsCount}
          </span>
        )}
      </div>
      <SelectWithLanguage />
    </div>
  )
}

function PublicHeader() {
  return (
    <div className='flex items-center space-x-9'>
      <SelectWithLanguage />
      <AuthenticationButtons />
    </div>
  )
}

const AuthenticationButtons = () => {
  return (
    <div className=''>
      <Button className='mr-3' variant='text'>
        Log In
      </Button>
      <Button className='ml-3' variant='primary'>
        Sign up
      </Button>
    </div>
  )
}

const SelectWithLanguage = () => {
  return (
    <select className='' id='' name=''>
      <option value=''>english</option>
      <option value=''>russia</option>
    </select>
  )
}
