// import type { Meta, StoryObj } from '@storybook/react'

// import { fn } from '@storybook/test'

// import { Button } from './Button'

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   title: 'Example/Button',
// } satisfies Meta<typeof Button>

// export default meta
// type Story = StoryObj<typeof meta>

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     label: 'Buutton',
//     primary: true,
//   },
// }

// export const Secondary: Story = {
//   args: {
//     label: 'Buutton',
//   },
// }

// export const Large: Story = {
//   args: {
//     label: 'Buutton',
//     size: 'large',
//   },
// }

// export const Small: Story = {
//   args: {
//     label: 'Buutton',
//     size: 'small',
//   },
// }
// export default {}

// import { Meta, StoryObj } from '@storybook/react'

// import { Button } from './Button'

// const meta = {
//   component: Button,
// } satisfies Meta<typeof Button>

// export default meta

// type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//   args: {
//     children: 'Hello',
//     onClick: () => alert('sup'),
//   },
// }

// export const Secondary: Story = {
//   args: {
//     ...Primary.args,
//     variant: 'secondary',
//   },
// }
/////////////////////////////////////////////////
// import type { Meta, StoryObj } from '@storybook/react'

// import { fn } from '@storybook/test'

// import { Button } from './Button'

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   title: 'Example/Button',
// } satisfies Meta<typeof Button>

// export default meta
// type Story = StoryObj<typeof meta>

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     label: 'Buutton',
//     primary: true,
//   },
// }

// export const Secondary: Story = {
//   args: {
//     label: 'Buutton',
//   },
// }

// export const Large: Story = {
//   args: {
//     label: 'Buutton',
//     size: 'large',
//   },
// }

// export const Small: Story = {
//   args: {
//     label: 'Buutton',
//     size: 'small',
//   },
// }

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
