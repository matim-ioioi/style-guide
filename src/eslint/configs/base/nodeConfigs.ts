import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import globals from 'globals'

export const nodeConfigs: InfiniteDepthConfigWithExtends = [
  {
    name: 'style-guide-node',
    languageOptions: {
      globals: globals.node,
    },
  },
]
