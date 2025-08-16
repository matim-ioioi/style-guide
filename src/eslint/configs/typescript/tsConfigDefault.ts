import type { Context } from '../types'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../../constants/paths.js'

export const tsConfigDefault = (context: Context) => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return {
    name: 'style-guide-typescript-default',
    files,
    rules: {
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase', 'UPPER_CASE'],
          selector: ['typeLike', 'enumMember', 'interface'],
        },
      ],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  }
}
