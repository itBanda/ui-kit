import { ReactNode, forwardRef } from 'react'

import { cn } from '@/utils'
import * as RadixTabs from '@radix-ui/react-tabs'

type TabsProps = {
  tabsData: Array<{
    content: ReactNode
    disabled?: boolean
    title: string
    value: string
  }>
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabsData }, ref) => {
    return (
      <RadixTabs.Root
        className='flex h-9 w-[972px] flex-col pt-6'
        defaultValue={tabsData[0]?.value}
        ref={ref}
      >
        <RadixTabs.List className='flex w-full'>
          {tabsData.map(tab => (
            <RadixTabs.Trigger
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
            </RadixTabs.Trigger>
          ))}
        </RadixTabs.List>
        {tabsData.map(tab => (
          <RadixTabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </RadixTabs.Content>
        ))}
      </RadixTabs.Root>
    )
  }
)

Tabs.displayName = 'Tabs'