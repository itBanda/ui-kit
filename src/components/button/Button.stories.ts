import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'

import { Button } from './Button'

// Конфигурация метаданных для Storybook
const meta = {
  argTypes: {
    backgroundColor: { control: 'color' }, // Настраиваемый цвет фона для кнопки
  },
  args: { onClick: fn() }, // Используем fn для отслеживания кликов, которые будут отображены в панели действий
  component: Button,
  parameters: {
    layout: 'centered', // Центрируем компонент в Canvas
  },
  tags: ['autodocs'], // Автоматическая генерация документации
  title: 'Example/Button', // Название истории в Storybook
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Пример сценария для Primary кнопки
export const Primary: Story = {
  args: {
    label: 'Button', // Текст на кнопке
    primary: true, // Основной стиль
  },
}

// Пример сценария для Secondary кнопки
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

// Пример сценария для Large кнопки
export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large', // Большой размер
  },
}

// Пример сценария для Small кнопки
export const Small: Story = {
  args: {
    label: 'Buttondwdw',
    size: 'small', // Маленький размер
  },
}
