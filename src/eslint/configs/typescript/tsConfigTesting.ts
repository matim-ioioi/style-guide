import type { Context } from '../types'
import { TESTING_PATHS } from '../../constants/paths.js'

export const tsConfigTesting = (context: Context) => {
  return {
    name: 'style-guide-typescript-testing',
    files: [...TESTING_PATHS],
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
