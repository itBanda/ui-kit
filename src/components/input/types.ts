import { ComponentProps, ReactNode } from 'react'

export type InputProps = {
  errorText?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: string
} & ComponentProps<'input'>
