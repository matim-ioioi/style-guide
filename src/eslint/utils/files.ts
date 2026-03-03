import type { Context } from '../configs/types'
import { JS_PATHS, TESTING_PATHS, TS_PATHS, VUE_PATHS } from '../constants.js'

export const getScriptFiles = (context: Pick<Context, 'vue'>): string[] => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return files
}

export const getTestingFiles = (context: Pick<Context, 'testing'>): string[] => {
  const files = [...TESTING_PATHS]

  if (context.testing?.paths) {
    files.push(...context.testing.paths)
  }

  return files
}
