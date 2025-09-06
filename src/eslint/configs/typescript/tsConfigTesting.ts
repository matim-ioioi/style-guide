import type { Context } from '../types'
import { TESTING_PATHS } from '../../constants/paths.js'

export const tsConfigTesting = (context: Context) => {
  const files = [...TESTING_PATHS]

  if (context.testing?.paths) {
    files.concat(context.testing.paths)
  }

  return {
    name: 'style-guide-typescript-testing',
    files,
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
    },
  }
}
