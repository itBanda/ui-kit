import { ComponentProps, ReactNode } from 'react'

export type InputProps = {
  errorText?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isRequired?: boolean
  label?: string
} & ComponentProps<'input'>
