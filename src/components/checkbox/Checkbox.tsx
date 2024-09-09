import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

type DefaultCheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type CheckboxProps = {
  id: string
  label?: string
} & DefaultCheckboxProps

export const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  label,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
    }
  }

  return (
    <label
      className={`relative flex items-center gap-0.5 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'} group`}
      id={id}
    >
      <div
        className={`relative h-10 w-10 rounded-full transition-colors duration-200 ${disabled ? 'cursor-not-allowed' : 'group-focus-within:bg-dark-500 group-hover:bg-dark-300 group-active:bg-dark-100'}`}
      >
        <input
          checked={isChecked}
          className='absolute h-full w-full cursor-pointer opacity-0'
          disabled={disabled}
          onChange={handleCheckboxChange}
          type='checkbox'
        />
        <span
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-sm border-2 border-[#EDF3FA] bg-black transition-all duration-200 ${isChecked ? 'border-white bg-white' : ''}`}
        >
          {isChecked && (
            <img
              alt='checked'
              className='h-full w-full'
              src='https://cdn-icons-png.flaticon.com/512/60/60731.png'
            />
          )}
        </span>
      </div>
      {label && (
        <span className={`text-white ${disabled ? 'cursor-not-allowed' : ''}`}>
          {label}
        </span>
      )}
    </label>
  )
}
