module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  rules: {
    'curly': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/button-has-type': 'off',
    'react/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'ignore', props: 'never' }],
  },
}

