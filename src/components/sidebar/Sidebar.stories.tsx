import { Button } from '@/components/button'
import { Icon } from '@/components/icon'
import { SideBar } from '@/components/sidebar/Sidebar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideBar> = {
  component: SideBar,
}

export default meta

const menu1 = [
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
const menu2 = [
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
        <nav className='flex flex-col items-center pb-[35px] pt-[72px] font-medium text-light-100'>
          <ul className='flex flex-col gap-[24px]'>
            {menu1.map((el, index) => (
              <li className='transition hover:text-accent-100' key={index}>
                <a className='flex gap-[12px]' href={el.href}>
                  <Icon icon={el.icon} />
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className='mt-[60px] flex flex-col gap-[24px]'>
            {menu2.map((el, index) => (
              <li
                className='min-w-[121.05px] transition hover:text-accent-100'
                key={index}
              >
                <a className='flex gap-[12px]' href={el.href}>
                  <Icon icon={el.icon} />
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='mt-auto flex min-w-[121.05px] gap-[12px] transition hover:text-accent-100'>
            <Icon icon='log-out-outline' />
            <Button className='p-0 font-medium text-light-100' variant='text'>
              Log Out
            </Button>
          </div>
        </nav>
      </SideBar>
    )
  },
}
