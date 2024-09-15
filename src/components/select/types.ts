import { ReactNode } from 'react'

export type Option = {
  icon?: ReactNode
  id?: string
  name: string
}
export type Props = {
  className?: string
  disabled?: boolean
  id: string
  label?: string
  options: Option[]
  width?: number
}
