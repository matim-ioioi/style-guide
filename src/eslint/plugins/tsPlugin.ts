import type { Context } from '../configs/types'
import typescriptEslint from 'typescript-eslint'
import { defaultParserOptions } from '../constants/parserOptions.js'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../constants/paths.js'

export const tsPlugin = (context: Context): any => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return {
    name: 'style-guide-typescript-plugin',
    files,
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: defaultParserOptions,
    },
  }
}
