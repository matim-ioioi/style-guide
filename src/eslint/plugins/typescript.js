import typescriptEslint from 'typescript-eslint'
import { defaultParserOptions } from '../constants/parserOptions.js'
import { JS_PATHS, TS_PATHS } from '../constants/paths.js'

export const tsPlugin = {
  name: 'style-guide-typescript-plugin',
  files: [...JS_PATHS, ...TS_PATHS],
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: defaultParserOptions,
  },
}
