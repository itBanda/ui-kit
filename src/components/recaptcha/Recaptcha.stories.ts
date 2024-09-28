import { Meta, StoryObj } from '@storybook/react'

import { Recaptcha } from './Recaptcha'

const meta = {
  component: Recaptcha,
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const ReCAPTCHA: Story = {
  args: {
    hl: 'en',
    sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    theme: 'dark',
  },
}
