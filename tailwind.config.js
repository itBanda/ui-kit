/** @type {import('tailwindcss').Config} */
import { palette } from './src/tailwind-palette'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        inter: ['Inter', 'system-ui'],
      },
      fontSize: {
        '2xl': ['1.625rem', '2.25rem'],
        lg: ['1.125rem', '1.5rem'],
        sm: ['0.875rem', '1.5rem'],
        xl: ['1.25rem', '2.25rem'],
      },
    },
  },
}
