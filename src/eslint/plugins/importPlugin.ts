import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../configs/types'
import importEslint from 'eslint-plugin-import-x'
// @ts-expect-error -- missed types
import { meta as importEslintMeta } from 'eslint-plugin-import-x/meta'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../constants/paths.js'

export const importPlugin = (context: Context): InfiniteDepthConfigWithExtends => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return {
    name: 'style-guide-import-plugin',
    files,
    plugins: {
      'import-x': {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- unknown error type
        meta: importEslintMeta,
        rules: importEslint.rules,
      },
    },
  }
}
