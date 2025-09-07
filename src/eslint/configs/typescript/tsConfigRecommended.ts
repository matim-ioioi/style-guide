import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import typescriptEslint from 'typescript-eslint'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../../constants/paths.js'

export const tsConfigRecommended = (context: Context): InfiniteDepthConfigWithExtends[] => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return typescriptEslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    // we must override cause typescriptEslint.configs.recommendedTypeChecked has rules that will be applied to all files without this overriding
    files,
  }))
}
