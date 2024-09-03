// import { ComponentPropsWithoutRef } from 'react'

// type Props = ComponentPropsWithoutRef<'button'>

// export function Button(props: Props) {
//   return (
//     <button className='mx-10 bg-slate-500' {...props} type='submit'>
//       Hello Hello hello
//     </button>
//   )
// }

// export type ButtonProps = {
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string
//   /**
//    * Button contents
//    */
//   label: string
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean
//   /**
//    * How large should the button be?
//    */
//   size?: 'large' | 'medium' | 'small'
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({
//   backgroundColor,
//   label,
//   primary = false,
//   size = 'medium',
//   ...props
// }: ButtonProps) => {
//   const mode = primary
//     ? 'storybook-button--primary'
//     : 'storybook-button--secondary'

//   return (
//     <button
//       className='bg-slate-400'
//       style={{ backgroundColor }}
//       type='button'
//       {...props}
//     >
//       {label}
//     </button>
//   )
// }
// import React, { ComponentPropsWithoutRef } from 'react'

// export type ButtonProps = {
//   children: React.ReactNode
//   color?: 'blue' | 'green' | 'red'
// } & ComponentPropsWithoutRef<'button'>

// const Button: React.FC<ButtonProps> = ({
//   children,
//   color = 'blue',
//   ...props
// }) => {
//   let colorClasses = 'bg-blue-500'

//   if (color === 'red') {
//     colorClasses = 'bg-red-500'
//   } else if (color === 'green') {
//     colorClasses = 'bg-green-500'
//   }

//   return (
//     // <button
//     //   className={`${colorClasses} rounded-md px-6 py-2 text-xl font-medium text-white transition-colors`}
//     // >
//     //   {children}
//     // </button>
//     <button className='bg-red-400' {...props}>
//       ee
//     </button>
//   )
// }

// export default Button

// import { ComponentProps } from 'react'

// // import { cva } from "class-variance-authority";

// type ButtonProps = {
//   variant?: 'outlined' | 'primary' | 'secondary' | 'text'
// } & ComponentProps<'button'>

// // const buttonVaraints = cva(["rounded-md", "inline-flex", "px-3", "py-2"], {
// //   variants: {
// //     intent: {
// //       primary: ["bg-blue-500", "text-slate-50"],
// //       secondary: ["bg-slate-500", "text-black"],
// //     },
// //   },
// // });

// function Button({ className, variant = 'primary', ...props }: ButtonProps) {
//   return (
//     <button
//       className={`inline-flex rounded-md px-3 py-2 ${variant === 'primary' ? 'bg-blue-500 text-slate-50' : ''}`}
//       {...props}
//     />
//   )
// }

// export { Button }

// import { ComponentPropsWithoutRef } from 'react'

// type Props = ComponentPropsWithoutRef<'button'>

// export function Button(props: Props) {
//   return (
//     <button className='mx-10 bg-slate-500' {...props} type='submit'>
//       Hello Hello hello
//     </button>
//   )
// }

// export type ButtonProps = {
//   /**
//    * What background color to usex
//    */
//   backgroundColor?: string
//   /**
//    * Button contents
//    */
//   label: string
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean
//   /**
//    * How large should the button be?
//    */
//   size?: 'large' | 'medium' | 'small'
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({
//   backgroundColor,
//   label,
//   primary = false,
//   size = 'medium',
//   ...props
// }: ButtonProps) => {
//   const mode = primary
//     ? 'storybook-button--primary'
//     : 'storybook-button--secondary'

//   return (
//     <button
//       className={['storybook-button', `storybook-button--${size}`, mode].join(
//         ' '
//       )}
//       style={{ backgroundColor }}
//       type='button'
//       {...props}
//     >
//       {label}
//     </button>
//   )
// }

export type ButtonProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'large' | 'medium' | 'small'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label,
  primary = false,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    large: 'py-3 px-6 text-lg',
    medium: 'py-2 px-4 text-base',
    small: 'py-1 px-2 text-sm',
  }

  const baseClasses =
    'font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2'

  const primaryClasses =
    'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500'
  const secondaryClasses =
    'bg-gray-200 text-black hover:bg-gray-400 focus:ring-gray-500'

  const mode = primary ? primaryClasses : secondaryClasses

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${mode}`}
      style={{ backgroundColor }}
      type='button'
      {...props}
    >
      {label}
    </button>
  )
}
