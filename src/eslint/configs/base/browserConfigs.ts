import globals from 'globals'

export const browserConfigs = [
  {
    name: 'style-guide-browser',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]
