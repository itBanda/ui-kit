import { useState } from 'react'

import s from './Checkbox.module.css'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id: string
  label?: string
  onChange?: () => void
}

export const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  label,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleCheckboxChange = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
    }
  }

  return (
    <label
      className={`${s.checkboxContainer} ${disabled ? s.disabled : ''}`}
      id={id}
    >
      <div className={s.shadow}>
        <input
          checked={isChecked}
          className={s.checkboxInput}
          disabled={disabled}
          onChange={onChange || handleCheckboxChange}
          type='checkbox'
        />
        <span className={`${s.checkbox} ${isChecked ? s.checked : ''}`}></span>{' '}
      </div>
      {label && (
        <span className={`${s.checkboxLabel} ${disabled ? s.disabled : ''}`}>
          {label}
        </span>
      )}
    </label>
  )
}
