export type PathGroupItem = {
  pattern: string
  group: string
  position: string
}

export type ImportOrderPathGroups = {
  prepend?: PathGroupItem[]
  append?: PathGroupItem[]
}

export const createImportOrderRules = (
  pathGroups?: ImportOrderPathGroups
): [
  'error',
  {
    groups: string[]
    pathGroups: PathGroupItem[]
    'newlines-between': 'ignore'
    alphabetize: { order: 'asc' | 'desc'; orderImportKind: 'asc' | 'desc'; caseInsensitive: boolean }
    sortTypesGroup: boolean
    pathGroupsExcludedImportTypes: string[]
  },
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
