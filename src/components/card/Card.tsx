import { ComponentProps, ReactNode } from 'react'

import { cn } from '../../utils'

export type Props = {
  backgroundColor?: string
  border?: string
  borderRadius?: string
  boxShadow?: string
  children?: ReactNode | string
  height?: number | string
  margin?: number | string
  padding?: number | string
  textColor?: string
  width?: number | string
} & ComponentProps<'div'>

export const Card = ({
  backgroundColor = 'bg-[#171717]',
  border = 'border border-solid border-[#333333]',
  borderRadius = 'rounded-sm',
  boxShadow,
  children,
  height = 100,
  margin,
  padding = 1,
  textColor = 'text-light-100',
  width = 100,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        backgroundColor,
        border,
        borderRadius,
        boxShadow,
        typeof height === 'string' && height,
        typeof width === 'string' && width,
        typeof padding === 'string' && padding,
        typeof margin === 'string' && margin,
        textColor,
        'transition-all'
      )}
      style={{
        height: typeof height === 'number' ? `${height}px` : undefined,
        margin: typeof margin === 'number' ? `${margin}px` : undefined,
        padding: typeof padding === 'number' ? `${padding}px` : undefined,
        width: typeof width === 'number' ? `${width}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
