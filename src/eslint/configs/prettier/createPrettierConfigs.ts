import type { Context } from '../types'
import prettierConfigs from 'eslint-plugin-prettier/recommended'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../../constants/paths.js'

export const createPrettierConfigs = (context: Context) => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return [{ ...prettierConfigs, files }]
}
