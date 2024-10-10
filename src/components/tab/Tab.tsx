import { PropsWithChildren, ReactNode, forwardRef } from 'react'

import { cn } from '@/utils'
import * as Tabs from '@radix-ui/react-tabs'

export type TabProps = {
  TabData: Array<{
    content: ReactNode
    disabled?: boolean
    title: string
    value: string
  }>
}

export const Tab = forwardRef<HTMLDivElement, PropsWithChildren<TabProps>>(
  ({ TabData, ...props }, ref) => {
    return (
      <Tabs.Root
        className='flex h-9 w-[972px] flex-col pt-6'
        defaultValue={TabData[0].value}
        ref={ref}
      >
        <Tabs.List className='flex w-full'>
          {TabData.map(tab => (
            <Tabs.Trigger
              className={cn(
                'flex-1 border-b-2 border-dark-100 px-4 py-1.5 text-base font-semibold text-dark-100 transition duration-200',
                'focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500',
                tab.disabled
                  ? cn(
                      'cursor-not-allowed border-b-2 border-dark-300 text-dark-300',
                      'data-[state=active]:border-accent-900 data-[state=active]:text-accent-900'
                    )
                  : cn(
                      'hover:border-b-2 hover:border-dark-100 hover:bg-accent-900/25 hover:text-dark-100',
                      'active:bg-accent-100/25 data-[state=active]:border-b-2 data-[state=active]:border-blue-500',
                      'data-[state=active]:text-accent-500'
                    )
              )}
              disabled={tab.disabled}
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {TabData.map(tab => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    )
  }
)

Tab.displayName = 'Tab'
