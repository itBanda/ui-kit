import { ComponentProps, useState } from 'react'

import { Icon } from '../icon/Icon'

type CheckboxProps = {
  id: string
  label?: string
} & ComponentProps<'input'>

export const Checkbox = ({ checked, disabled, id, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
    }
  }

  const cursorView = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer'

  const pseudoClasses = disabled
    ? ''
    : 'group-focus-within:bg-dark-500 group-hover:bg-dark-300 group-active:bg-dark-100'

  const iconColor = disabled
    ? 'cursor-not-allowed text-light-100'
    : 'text-dark-900'

  const checkboxBg = isChecked ? 'border-white bg-white' : ''
  const disabledCheckboxBg = disabled ? 'border-none bg-dark-100' : ''

  return (
    <label
      className={`${cursorView} group relative flex items-center gap-0.5`}
      id={id}
    >
      <div
        className={`relative h-10 w-10 rounded-full transition-colors duration-200 ${pseudoClasses}`}
      >
        <input
          checked={isChecked}
          className='absolute h-full w-full cursor-pointer opacity-0'
          disabled={disabled}
          onChange={handleCheckboxChange}
          type='checkbox'
        />
        <span
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-sm border-2 border-[#EDF3FA] bg-black transition-all duration-200 ${checkboxBg} ${disabledCheckboxBg}`}
        >
          {isChecked && (
            <Icon
              className={`${iconColor} absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform`}
              icon='checkmark-outline'
            />
          )}
        </span>
      </div>
      {label && <span className={`text-white ${cursorView}`}>{label}</span>}
    </label>
  )
}
