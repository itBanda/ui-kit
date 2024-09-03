export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: () => void
}
export const Checkbox = ({
  checked,
  disabled,
  id,
  label,
  onChange,
}: CheckboxProps) => {
  return (
    <label id={id}>
      <input
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        type='checkbox'
      />
      {label}
    </label>
  )
}
