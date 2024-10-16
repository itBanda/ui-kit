import { Button } from '@/components/button'
import { Icon } from '@/components/icon'
import { IconName } from '@/components/icon/Icon'
import { SideBar } from '@/components/sidebar/Sidebar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideBar> = {
  component: SideBar,
}

type Menu = {
  href: string
  icon: IconName
  label: string
}
export default meta

const menu1: Menu[] = [
  {
    href: '#',
    icon: 'home-outline',
    label: 'Home',
  },
  {
    href: '#',
    icon: 'plus-square-outline',
    label: 'Create',
  },
  {
    href: '#',
    icon: 'person-outline',
    label: 'My Profile',
  },
  {
    href: '#',
    icon: 'message-circle-outline',
    label: 'Messenger',
  },
  {
    href: '#',
    icon: 'search-outline',
    label: 'Search',
  },
]
const menu2: Menu[] = [
  {
    href: '#',
    icon: 'trending-up-outline',
    label: 'Statistics',
  },
  {
    href: '#',
    icon: 'bookmark-outline',
    label: 'Favorites',
  },
]

export const Default: StoryObj<typeof meta> = {
  render: () => {
    return (
      <SideBar>
        <nav className='h-fullп flex flex-col items-center self-start font-medium text-light-100'>
          <ul className='justify-s flex flex-col gap-6'>
            {menu1.map((el, index) => (
              <li className='transition hover:text-accent-100' key={index}>
                <a className='flex gap-3' href={el.href}>
                  <Icon icon={el.icon} />
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className='mt-[60px] flex flex-col gap-6 self-start'>
            {menu2.map((el, index) => (
              <li className='transition hover:text-accent-100' key={index}>
                <a className='flex gap-3' href={el.href}>
                  <Icon icon={el.icon} />
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className='mt-auto flex gap-3 self-start p-0 font-medium text-light-100 transition hover:text-accent-100'
            variant='text'
          >
            <Icon icon='log-out-outline' />
            Log Out
          </Button>
        </nav>
      </SideBar>
    )
  },
}
