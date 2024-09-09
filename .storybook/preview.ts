import type { Preview } from '@storybook/react';
import '../src/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Dark theme',
      values: [
        {
          name: 'Dark theme',
          value: '#0D0D0D',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
