import typescriptEslint from 'typescript-eslint'
import { browserConfig } from './src/eslint/configs/base/browser.js'
import { nodeConfig } from './src/eslint/configs/base/node.js'
import eslintConfigs from './src/eslint/configs/index.js'

export default typescriptEslint.config(browserConfig, nodeConfig, eslintConfigs, {
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    'import-x/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
})
