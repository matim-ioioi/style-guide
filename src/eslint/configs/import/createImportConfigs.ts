import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import importEslint from 'eslint-plugin-import-x'
// @ts-expect-error -- missed types
import { meta as importEslintMeta } from 'eslint-plugin-import-x/meta'
import { getScriptFiles, getTestingFiles } from '../../utils/files.js'

// --- Import order rules builder ---

type PathGroupItem = {
  pattern: string;
  group: string;
  position: string;
}

type ImportOrderPathGroups = {
  prepend?: PathGroupItem[];
  append?: PathGroupItem[];
}

const createImportOrderRules = (
  pathGroups?: ImportOrderPathGroups
): [
  'error',
  {
    groups: string[];
    pathGroups: PathGroupItem[];
    'newlines-between': 'ignore';
    alphabetize: { order: 'asc' | 'desc'; orderImportKind: 'asc' | 'desc'; caseInsensitive: boolean };
    sortTypesGroup: boolean;
    pathGroupsExcludedImportTypes: string[];
  }
] => {
  return [
    'error',
    {
      groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      pathGroups: [
        ...(pathGroups?.prepend ?? []),
        { pattern: '@/**', group: 'internal', position: 'after' },
        { pattern: '~/**', group: 'internal', position: 'after' },
        { pattern: '@root/**', group: 'internal', position: 'after' },
        { pattern: '@app/**', group: 'parent', position: 'before' },
        { pattern: '@pages/**', group: 'parent', position: 'before' },
        { pattern: '@widgets/**', group: 'parent', position: 'before' },
        { pattern: '@features/**', group: 'parent', position: 'before' },
        { pattern: '@entities/**', group: 'parent', position: 'before' },
        { pattern: '@shared/**', group: 'parent', position: 'before' },
        ...(pathGroups?.append ?? []),
      ],
      'newlines-between': 'ignore',
      alphabetize: {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: false,
      },
      sortTypesGroup: true,
      pathGroupsExcludedImportTypes: ['builtin'],
    },
  ]
}

// --- Plugin config ---

const importPlugin = (context: Context): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-import-plugin',
    files: getScriptFiles(context),
    plugins: {
      'import-x': {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- unknown error type
        meta: importEslintMeta,
        rules: importEslint.rules,
      },
    },
  }
}

// --- Default import rules ---

const importConfigDefault = (context: Context, pathGroups?: ImportOrderPathGroups): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-import-default',
    files: getScriptFiles(context),
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

// --- Testing import rules ---

const importConfigTesting = (context: Context, pathGroups?: ImportOrderPathGroups): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-import-testing',
    files: getTestingFiles(context),
    rules: {
      'import-x/no-cycle': ['warn', { ignoreExternal: true }],
      'import-x/no-restricted-paths': 'off',
      'import-x/order': createImportOrderRules({
        prepend: [{ pattern: '**/__mocks__/*', group: 'builtin', position: 'before' }, ...(pathGroups?.prepend ?? [])],
        append: pathGroups?.append,
      }),
    },
  }
}

// --- Import settings ---

const importConfigSettings = (context: Context): InfiniteDepthConfigWithExtends => {
  const files = getScriptFiles(context)
  const ignore = [/__generated__/]
  const extensions = ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.cts', '.mts']
  const parsers: Record<string, string[]> = {
    espree: ['.js', '.cjs', '.mjs', '.jsx'],
    '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
  }

  if (context.vue) {
    ignore.push(/\.vue$/)
    extensions.push('.vue')
    parsers['vue-eslint-parser'] = ['.vue']
  }

  return {
    name: 'style-guide-import-settings',
    files,
    settings: {
      'import-x/ignore': ignore,
      'import-x/extensions': extensions,
      'import-x/parsers': parsers,
      'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
  }
}

// --- Main export ---

export const createImportConfigs = (
  context: Context,
  pathGroups?: ImportOrderPathGroups
): InfiniteDepthConfigWithExtends => {
  return [
    importPlugin(context),
    importConfigDefault(context, pathGroups),
    importConfigTesting(context, pathGroups),
    importConfigSettings(context),
  ]
}
