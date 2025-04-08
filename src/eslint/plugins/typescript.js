import typescriptEslint from 'typescript-eslint'
import { defaultParserOptions } from '../constants/parserOptions.js'

export const tsPlugin = {
  name: 'style-guide-typescript-plugin',
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: defaultParserOptions,
  },
}
