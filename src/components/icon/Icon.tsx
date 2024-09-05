import { Suspense } from 'react'

import { icons } from './icons'

export type IconName = keyof typeof icons

type Props = {
  color?: string
  height?: number
  icon: IconName
  width?: number
}

export const Icon = ({
  color = 'black',
  height = 24,
  icon,
  width = 24,
}: Props) => {
  const Component = icons[icon]

  if (!Component) return null

  return (
    <Suspense fallback={null}>
      <Component color={color} height={height} width={width} />
    </Suspense>
  )
}
