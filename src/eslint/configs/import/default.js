import { JS_PATHS, TS_PATHS } from '../../constants/paths.js'
import { createImportOrderRules } from './utils/createImportOrderRules.js'

export const importDefaultConfig = {
  name: 'style-guide-import-default',
  files: [...JS_PATHS, ...TS_PATHS],
  rules: {
    /**
     * Сортировка импортов
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true, // Не используем сортировку по номерам строк, используем eslint-plugin-import для этого
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],

    /**
     * Сортирует импорты по группам. Порядок групп: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'internal', 'type']
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import-x/order': createImportOrderRules(),

    /**
     * Импорты могут находиться только в начале файла
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import-x/first': 'error',

    /**
     * Разрешаем использовать `export` в любом месте файла
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
     */
    'import-x/exports-last': 'off',

    /**
     * После импортов должен быть отступ
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import-x/newline-after-import': 'error',

    /**
     * [ОТКЛЮЧЕНО] Выкидываем предупреждение, если использован импорт функционала, который помечен как `@deprecated` в `jsdoc`
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     */
    'import-x/no-deprecated': 'off',

    /**
     * [ОТКЛЮЧЕНО] Проверка на существование свойств в импортированных модулях вглубину. Выключено, т.к. покрывается `TypeScript`
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import-x/namespace': 'off',

    /**
     * Запрещает импорт с пустым телом
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     */
    'import-x/no-empty-named-blocks': 'error',

    /**
     * Не линтим импорты в зависимости от файлсистемы
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import-x/no-unresolved': 'off',

    /**
     * Запрещает циклические импорты между модулями
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import-x/no-cycle': ['error', { ignoreExternal: true }],

    /**
     * Запрещает дублирование импортов (дублирование модулей)
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    'import-x/no-duplicates': ['error', { 'prefer-inline': false }],

    /**
     * Определяем пути, для которых нельзя импортировать из определённых наборов путей
     * Например: описываем здесь линтинг для кросс-импортов между слоями для методологии FSD
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
     */
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
            message:
              'FSD | shared слой не может содержать импорты из слоёв выше (entities, features, widgets, pages, app)',
          },
          //entities
          {
            target: '**/client/entities/**',
            from: ['**/client/entities/*/index.ts'],
            message:
              'FSD | entities слой не может содержать импорт своего же публичного API (если это кросс-импорт типов между сущностями, используйте "// eslint-disable-next-line import/no-restricted-paths -- Кросс-имопрт типов между сущностями")',
          },
          {
            target: '**/client/entities/**',
            from: ['**/client/features/**', '**/client/widgets/**', '**/client/pages/**', '**/client/app/**'],
            message: 'FSD | entities слой не может содержать импорты из слоёв выше (features, widgets, pages, app)',
          },
          {
            target: '**/client/entities/*/index.ts',
            from: ['**/client/!(entities)/**'],
            message:
              'FSD | файл публичного API слоя entities не может импортировать ничего, кроме самого слоя entities',
          },
          // features
          {
            target: '**/client/features/**',
            from: ['**/client/entities/**/!(index.ts)'],
            message: 'FSD | features слой не может содержать импорт из НЕпубличного API ниже лежащих слоёв (entities)',
          },
          {
            target: '**/client/features/**',
            from: ['**/client/features/*/index.ts'],
            message: 'FSD | features слой не может содержать импорт своего же публичного API',
          },
          {
            target: '**/client/features/**',
            from: ['**/client/widgets/**', '**/client/pages/**', '**/client/app/**'],
            message: 'FSD | features слой не может содержать импорты из слоёв выше (widgets, pages, app)',
          },
          {
            target: '**/client/features/*/index.ts',
            from: ['**/client/!(features)/**'],
            message:
              'FSD | файл публичного API слоя features не может импортировать ничего, кроме самого слоя features',
          },
          // widgets
          {
            target: '**/client/widgets/**',
            from: ['**/client/entities/**/!(index.ts)', '**/client/features/**/!(index.ts)'],
            message:
              'FSD | widgets слой не может содержать импорт из НЕпубличного API ниже лежащих слоёв (entities, features)',
          },
          {
            target: '**/client/widgets/**',
            from: ['**/client/widgets/*/index.ts'],
            message: 'FSD | widgets слой не может содержать импорт своего же публичного API',
          },
          {
            target: '**/client/widgets/**',
            from: ['**/client/pages/**', '**/client/app/**'],
            message: 'FSD | widgets слой не может содержать импорты из слоёв выше (pages, app)',
          },
          {
            target: '**/client/widgets/*/index.ts',
            from: ['**/client/!(widgets)/**'],
            message: 'FSD | файл публичного API слоя widgets не может импортировать ничего, кроме самого слоя widgets',
          },
          // pages
          {
            target: '**/client/pages/**',
            from: [
              '**/client/entities/**/!(index.ts)',
              '**/client/features/**/!(index.ts)',
              '**/client/widgets/**/!(index.ts)',
            ],
            message:
              'FSD | pages слой не может содержать импорт из НЕпубличного API ниже лежащих слоёв (entities, features, widgets)',
          },
          {
            target: '**/client/pages/**',
            from: ['**/client/app/**'],
            message: 'FSD | pages слой не может содержать импорты из слоёв выше (app)',
          },
        ],
      },
    ],

    /**
     * Выключаем насильно именованный импорт вместо дефолтного
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     */
    'import-x/no-named-as-default-member': 'off',
  },
}
