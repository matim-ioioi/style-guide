import { defaultParserOptions, vueParserOptions } from '../../constants/parserOptions.js'
import { JS_PATHS, TS_PATHS } from '../../constants/paths.js'

export const importSettingsConfig = {
  name: 'style-guide-import-settings',
  files: [...JS_PATHS, ...TS_PATHS],
  settings: {
    'import-x/ignore': [/__generated__/, /\.vue$/],
    'import-x/extensions': ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.cts', '.mts', '.vue'],
    'import-x/resolver-next': {
      node: {},
      typescript: defaultParserOptions,
      vue: {
        parserOptions: vueParserOptions,
      },
    },
    'import-x/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
      'vue-eslint-parser': ['.vue'],
    },
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
}
