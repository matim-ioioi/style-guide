import stylisticPlugin from '@stylistic/eslint-plugin'
import globals from 'globals'

export const baseConfigs = [
  {
    name: 'style-guide-base',
    languageOptions: {
      globals: {
        ...globals.es2024,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
      'no-var': 'error',
      curly: ['error', 'all'],
      'default-case-last': 'error',
      eqeqeq: 'error',
      'grouped-accessor-pairs': 'error',
      'no-alert': 'error',
      'no-else-return': ['error', { allowElseIf: true }],
      'no-extend-native': 'error',
      'no-lone-blocks': 'error',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-extra-bind': 'error',
      'no-useless-call': 'error',
      'no-useless-return': 'error',
      yoda: 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'id-match': ['error', '^[a-zA-Z0-9_$]*$', { properties: true, classFields: true }],

      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
      '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    },
  },
]
