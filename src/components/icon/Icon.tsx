import { Suspense } from 'react'

import { icons } from './icons'

export type IconName = keyof typeof icons

type Props = {
  className?: string
  color?: string
  cursor?: 'auto' | 'pointer'
  height?: number
  icon: IconName
  onClick?: () => void
  width?: number
}

export const Icon = ({
  className,
  color = 'inherit',
  cursor = 'auto',
  height = 24,
  icon,
  onClick,
  width = 24,
}: Props) => {
  const Component = icons[icon]

  if (!Component) return null

  return (
    <Suspense fallback={null}>
      <Component
        className={className}
        color={color}
        cursor={cursor}
        height={height}
        onClick={onClick}
        width={width}
      />
    </Suspense>
  )
}
