import globals from 'globals'

export const nodeConfigs = [
  {
    name: 'style-guide-node',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
