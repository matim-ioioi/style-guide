import globals from 'globals'

export const browserConfig = {
  name: 'style-guide-browser',
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
}
