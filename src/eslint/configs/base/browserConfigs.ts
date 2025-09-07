import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import globals from 'globals'

export const browserConfigs: InfiniteDepthConfigWithExtends = [
  {
    name: 'style-guide-browser',
    languageOptions: {
      globals: globals.browser,
    },
  },
]
