import type { Context } from '../types'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../../constants/paths.js'
import { createImportOrderRules } from './utils/createImportOrderRules.js'

export const importConfigDefault = (context: Context, pathGroups?: Parameters<typeof createImportOrderRules>[0]) => {
  const files = [...JS_PATHS, ...TS_PATHS]

  if (context.vue) {
    files.push(...VUE_PATHS)
  }

  return {
    name: 'style-guide-import-default',
    files,
    rules: {
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true, // Uses eslint-plugin-import-x for sorting by line number instead default sort-imports
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'import-x/order': createImportOrderRules(pathGroups),
      'import-x/first': 'error',
      'import-x/exports-last': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/no-deprecated': 'off',
      'import-x/namespace': 'off',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/no-cycle': ['error', { ignoreExternal: true }],
      'import-x/no-duplicates': ['error', { 'prefer-inline': false }],
      'import-x/no-restricted-paths': [
        'warn',
        {
          zones: [
            // shared
            {
              target: '**/client/shared/**',
              from: [
                '**/client/entities/**',
                '**/client/features/**',
                '**/client/widgets/**',
                '**/client/pages/**',
                '**/client/app/**',
              ],
              message: 'FSD | shared cannot import from upper layers (entities, features, widgets, pages, app)',
            },
            // entities
            {
              target: '**/client/entities/**',
              from: ['**/client/features/**', '**/client/widgets/**', '**/client/pages/**', '**/client/app/**'],
              message: 'FSD | entities cannot import from upper layers (features, widgets, pages, app)',
            },
            {
              target: '**/client/entities/*/index.ts',
              from: ['**/client/!(entities)/**'],
              message: 'FSD | index-file of entities public API cannot import other layers',
            },
            // features
            {
              target: '**/client/features/**',
              from: ['**/client/entities/**/!(index.ts)'],
              message: 'FSD | features cannot import from private API of lower layers (entities)',
            },
            {
              target: '**/client/features/**',
              from: ['**/client/features/*/index.ts'],
              message: 'FSD | features cannot import from itself public API',
            },
            {
              target: '**/client/features/**',
              from: ['**/client/widgets/**', '**/client/pages/**', '**/client/app/**'],
              message: 'FSD | features cannot import from upper layers (widgets, pages, app)',
            },
            {
              target: '**/client/features/*/index.ts',
              from: ['**/client/!(features)/**'],
              message: 'FSD | index-file of features public API cannot import other layers',
            },
            // widgets
            {
              target: '**/client/widgets/**',
              from: ['**/client/entities/**/!(index.ts)', '**/client/features/**/!(index.ts)'],
              message: 'FSD | widgets cannot import from private API of lower layers (entities, features)',
            },
            {
              target: '**/client/widgets/**',
              from: ['**/client/widgets/*/index.ts'],
              message: 'FSD | widgets cannot import from itself public API',
            },
            {
              target: '**/client/widgets/**',
              from: ['**/client/pages/**', '**/client/app/**'],
              message: 'FSD | widgets cannot import from upper layers (pages, app)',
            },
            {
              target: '**/client/widgets/*/index.ts',
              from: ['**/client/!(widgets)/**'],
              message: 'FSD | index-file of widgets public API cannot import other layers',
            },
            // pages
            {
              target: '**/client/pages/**',
              from: [
                '**/client/entities/**/!(index.ts)',
                '**/client/features/**/!(index.ts)',
                '**/client/widgets/**/!(index.ts)',
              ],
              message: 'FSD | pages cannot import from private API of lower layers (entities, features, widgets)',
            },
            {
              target: '**/client/pages/**',
              from: ['**/client/app/**'],
              message: 'FSD | pages cannot import from upper layers (app)',
            },
          ],
        },
      ],
      'import-x/no-named-as-default-member': 'off',
    },
  }
}
