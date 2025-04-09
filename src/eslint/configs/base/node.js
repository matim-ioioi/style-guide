import globals from 'globals'

export const nodeConfig = {
  name: 'style-guide-node',
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
}
