import { ComponentProps, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../utils'

const buttonVariants = cva(
  [
    'text-white text-base font-semibold py-1.5 px-6 rounded-sm transition duration-300 ease-in-out',
  ],
  {
    compoundVariants: [
      {
        class: 'text-accent-900 border-accent-900',
        disabled: true,
        variant: 'outlined',
      },
      {
        class: 'bg-accent-900 text-light-900',
        disabled: true,
        variant: 'primary',
      },
      {
        class: 'bg-dark-500 text-light-900',
        disabled: true,
        variant: 'secondary',
      },
      {
        class: 'text-accent-900',
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
          'enabled:hover:border-accent-100 enabled:hover:text-accent-100 enabled:active:text-accent-700 enabled:active:border-accent-700',
        ],
        primary: [
          'bg-accent-500',
          'enabled:hover:bg-accent-100 enabled:active:bg-accent-700 enabled:active:text-light-500',
        ],
        secondary: [
          'bg-dark-300',
          'enabled:hover:bg-dark-100 enabled:active:bg-dark-500 enabled:focus:outline-accent-500',
        ],
        text: [
          'text-accent-500',
          'enabled:hover:text-accent-100 enabled:active:text-accent-700 enabled:focus:outline-accent-500',
        ],
      },
    },
  }
)

type Props = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, disabled, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ disabled, variant }), className)}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
