import { jsx as _jsx } from 'react/jsx-runtime'
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label,
  primary = false,
  size = 'medium',
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'

  return _jsx('button', {
    className: ['storybook-button', `storybook-button--${size}`, mode].join(
      ' '
    ),
    style: { backgroundColor },
    type: 'button',
    ...props,
    children: label,
  })
}
