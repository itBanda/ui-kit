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
