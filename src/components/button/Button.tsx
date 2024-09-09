import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { cn } from '../../utils'

const buttonVariants = cva(
  ['text-white text-base font-semibold py-1.5 px-6 rounded-sm'],
  {
    compoundVariants: [
      {
        class: 'text-accent-900 opacity-50 border-accent-700',
        disabled: true,
        variant: 'outlined',
      },
      {
        class: 'bg-accent-900 text-light-900 opacity-50',
        disabled: true,
        variant: 'primary',
      },
      {
        class: 'bg-dark-500  text-light-900 opacity-50',
        disabled: true,
        variant: 'secondary',
      },
      {
        class: 'text-accent-900 opacity-50 ',
        disabled: true,
        variant: 'text',
      },
    ],
    defaultVariants: {
      disabled: false,
      variant: 'primary',
    },
    variants: {
      disabled: {
        false: '',
        true: 'cursor-not-allowed',
      },
      variant: {
        outlined: [
          'bg-transparent text-accent-500 border border-accent-500',
          ' enabled:hover:border-accent-100 enabled:hover:text-accent-100 active:text-accent-700 active:border-accent-700',
        ],
        primary: [
          'bg-accent-500',
          ' enabled:hover:bg-accent-100 active:bg-accent-700 active: text-light-500',
        ],
        secondary: [
          'bg-dark-300',
          ' enabled:hover:bg-dark-100 active:bg-dark-500  focus:outline-accent-500',
        ],
        text: [
          'text-accent-500',
          ' enabled:hover:text-accent-100 active:text-accent-700 focus:outline-accent-500',
        ],
      },
    },
  }
)

export type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

export const Button = ({
  className,
  disabled = false,
  variant,
  ...props
}: Props) => {
  return (
    <button
      className={twMerge(cn(buttonVariants({ disabled, variant }), className))}
      disabled={disabled}
      {...props}
    />
  )
}
