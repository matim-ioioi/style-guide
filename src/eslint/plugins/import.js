import importEslint from 'eslint-plugin-import-x'
import { meta as importEslintMeta } from 'eslint-plugin-import-x/meta'
import { JS_PATHS, TS_PATHS } from '../constants/paths.js'

export const importPlugin = {
  name: 'style-guide-import-plugin',
  files: [...JS_PATHS, ...TS_PATHS],
  plugins: {
    'import-x': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- unknown error type
      meta: importEslintMeta,
      rules: importEslint.rules,
    },
  },
}
