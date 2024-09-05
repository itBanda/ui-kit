import { useState } from 'react'

export type InputProps = {
  errorText?: string
  icon?: string
  label?: string
  placeholder?: string
  type: 'email' | 'password' | 'search' | 'text'
  variant: 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'
}

export const Input = ({
  errorText,
  icon,
  label,
  placeholder,
  type,
  variant,
  ...props
}: InputProps) => {
  let inputClasses = 'disabled=false flex rounded-sm border border-dark-100'
  const [currentType, setCurrentType] = useState(type)

  const setVisiableHandler = () => {
    if (type === 'password') {
      setCurrentType(currentType === 'password' ? 'text' : 'password')
    }
  }

  switch (variant) {
    case 'active':
      inputClasses += ' border-dark-500'
      break
    case 'disabled':
      inputClasses += ' disabled'
      break
    case 'error':
      inputClasses += ' border-danger-500'
      break
    case 'focus':
      inputClasses += ' border-accent-500'
      break
    case 'hover':
      inputClasses += ' border-light-900'
      break
    default:
      inputClasses
  }
  const positionIcon = type === 'search' ? 'flex-row-reverse justify-end' : ''

  return (
    <>
      <label className='block text-sm'>{label}</label>
      <div
        className={`relative ${positionIcon} inline-flex items-center text-gray-400 ${inputClasses} focus-within:border-accent-500`}
      >
        <input
          className='border-none bg-transparent text-light-100 focus:outline-none'
          disabled={variant === 'disabled'}
          placeholder={placeholder}
          type={currentType}
        ></input>
        <div className='ml-2' onClick={setVisiableHandler}>
          {type === 'password' && currentType === 'password' && (
            <CloseEyeIcon />
          )}
          {type === 'password' && currentType === 'text' && <EyeIcon />}
          {type === 'search' && <SearchIcon />}
        </div>
      </div>
      <span className='block text-sm text-danger-500'>{errorText}</span>
    </>
  )
}

export const EyeIcon = () => (
  <svg
    className='size-6'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
export const CloseEyeIcon = () => (
  <svg
    className='size-6'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
export const SearchIcon = () => (
  <svg
    className='size-6'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)