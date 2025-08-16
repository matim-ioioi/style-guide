import type { Context } from '../types'
import { defaultParserOptions, vueParserOptions } from '../../constants/parserOptions.js'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../../constants/paths.js'

export const importConfigSettings = (context: Context) => {
  const files = [...JS_PATHS, ...TS_PATHS]
  const ignore = [/__generated__/]
  const extensions = ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.cts', '.mts']
  const resolver: {
    node: object
    typescript: typeof defaultParserOptions
    vue?: { parserOptions: typeof vueParserOptions }
  } = {
    node: {},
    typescript: defaultParserOptions,
  }
  const parsers: Record<string, string[]> = {
    espree: ['.js', '.cjs', '.mjs', '.jsx'],
    '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
  }

  if (context.vue) {
    files.push(...VUE_PATHS)
    ignore.push(/\.vue$/)
    extensions.push('.vue')
    resolver.vue = { parserOptions: vueParserOptions }
    parsers['vue-eslint-parser'] = ['.vue']
  }

  return {
    name: 'style-guide-import-settings',
    files,
    settings: {
      'import-x/ignore': ignore,
      'import-x/extensions': extensions,
      'import-x/resolver-next': resolver,
      'import-x/parsers': parsers,
      'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
  }
}
