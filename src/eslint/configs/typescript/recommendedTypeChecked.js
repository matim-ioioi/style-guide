import typescriptEslint from 'typescript-eslint'
import { JS_PATHS, TS_PATHS } from '../../constants/paths.js'

export const tsRecommendedTypeCheckedConfigs = typescriptEslint.configs.recommendedTypeChecked.map((config) => ({
  ...config,
  // we must override cause typescriptEslint.configs.recommendedTypeChecked has rules that will be applied to all files without this overriding
  files: [...JS_PATHS, ...TS_PATHS],
}))
