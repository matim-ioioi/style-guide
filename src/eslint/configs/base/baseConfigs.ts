import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import stylisticPlugin from '@stylistic/eslint-plugin'
import globals from 'globals'

export const browserConfigs: InfiniteDepthConfigWithExtends = [
  {
    name: 'style-guide-browser',
    languageOptions: {
      globals: globals.browser,
    },
  },
]

export const nodeConfigs: InfiniteDepthConfigWithExtends = [
  {
    name: 'style-guide-node',
    languageOptions: {
      globals: globals.node,
    },
  },
]

export const baseConfigs: InfiniteDepthConfigWithExtends = [
  {
    name: 'style-guide-base',
    languageOptions: {
      globals: globals.es2024,
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

      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
      '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/member-delimiter-style': ['error', {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'semi', requireLast: false },
      }],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/max-len': ['error', { code: 120, ignoreUrls: true, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/spaced-comment': ['error', 'always', { markers: ['#region', '#endregion'] }],
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/lines-between-class-members': ['error', 'always'],

      'prefer-const': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
]
