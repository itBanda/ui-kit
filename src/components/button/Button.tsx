import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { cn } from '../../utils/cn'

// type Props = ComponentProps<"button"> & {
//   variant: ButtonVariant;
// };
// type ButtonVariant = "primary" | "secondary" | "outline" | "text";

// const variants: Record<ButtonVariant, string> = {
//   primary: "bg-blue-500",
//   secondary: "bg-neutral-600",
//   outline: "bg-transparent text-blue-500 border border-blue-500",
//   text: "text-blue-500",
// };

export type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

const buttonVariants = cva(
  ['text-white text-base font-semibold py-1.5 px-6 rounded-sm'],
  {
    defaultVariants: {
      variant: 'primary',
    },
    variants: {
      variant: {
        outline: [
          'bg-transparent text-blue-500 border border-blue-500',
          'hover:border-blue-500 hover:text-blue-400',
        ],
        // **or**
        primary: ['bg-blue-500', 'hover:bg-blue-400'],
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: ['bg-neutral-600', 'hover:bg-neutral-500'],
        text: ['text-blue-500', 'hover:text-blue-400'],
      },
    },
  }
)

export const Button = ({ className, variant, ...props }: Props) => {
  return (
    <button
      //   className={cn(
      //     `text-white text-base font-semibold py-1.5 px-6 rounded-sm ${variants[variant]}`,
      //     className
      //   )}
      //   className={twMerge(
      //     `text-white text-base font-semibold py-1.5 px-6 rounded-sm ${variants[variant]}`
      //   )}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
}
