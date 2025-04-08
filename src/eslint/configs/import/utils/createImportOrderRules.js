export const createImportOrderRules = (prependPathGroups = [], appendPathGroups = []) => {
  return [
    'error',
    {
      groups: [
        'type', // Типы
        'builtin', // "Встроенные" модули (например, `node:utils`, `node:path` и т.п.)
        'external', // Внешние модули (зависимости)
        'internal', // Модули текущего проекта (обычно алиасы)
        'parent', // Родительская папка (относительный путь) (например, `../foo`, `../../baz`)
        'sibling', // Дочерняя папка (относительный путь) (например, `./foo`, `./foo/baz`)
        'index', // `index` текущей директории (`./`)
        'object', // "object"-imports (only available in TypeScript) (например, `import log = console.log`)
      ],
      pathGroups: [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просит типизацию в js
        ...prependPathGroups,
        { pattern: '@/**', group: 'internal', position: 'after' },
        { pattern: '~/**', group: 'internal', position: 'after' },
        { pattern: '@root/**', group: 'internal', position: 'after' },
        { pattern: '@app/**', group: 'parent', position: 'before' },
        { pattern: '@pages/**', group: 'parent', position: 'before' },
        { pattern: '@widgets/**', group: 'parent', position: 'before' },
        { pattern: '@features/**', group: 'parent', position: 'before' },
        { pattern: '@entities/**', group: 'parent', position: 'before' },
        { pattern: '@shared/**', group: 'parent', position: 'before' },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просит типизацию в js
        ...appendPathGroups,
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
