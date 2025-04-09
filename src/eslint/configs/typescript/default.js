import { JS_PATHS, TS_PATHS } from '../../constants/paths.js'

export const tsDefaultConfig = {
  name: 'style-guide-typescript-default',
  files: [...JS_PATHS, ...TS_PATHS],
  rules: {
    /**
     * Запрещает использование ненужных конструкторов
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-useless-constructor/
     */
    '@typescript-eslint/no-useless-constructor': 'error',

    /**
     * Разрешаем операторы `require`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-var-requires/
     */
    '@typescript-eslint/no-var-requires': 'off',

    /**
     * Запрещает использовать комментарии для игнорирования правил TypeScript без комментариев
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/ban-ts-comment/
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
      },
    ],

    /**
     * Можно использовать тип `any`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-explicit-any/
     */
    '@typescript-eslint/no-explicit-any': 'off',

    /**
     * Запрещаем использование оператора `!`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-non-null-assertion/
     */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /**
     * Запрещаем использовать неиспользуемые переменные, которые начинаются не на `_`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unused-vars/
     */
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

    /**
     * Запрещаем использовать параметры со значением по умолчанию не последними
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/default-param-last/
     */
    '@typescript-eslint/default-param-last': 'error',

    /**
     * Запрещаем декларировать переменные с именем, если она уже определена в скоупе выше
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-shadow/
     */
    '@typescript-eslint/no-shadow': 'error',

    /**
     * Отделяет экспорты типов от НЕ типов
     *
     * 🔧 Исправляется автоматически - https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': 'error',

    /**
     * Отделяет импорты типов от НЕ типов
     *
     * 🔧 Исправляется автоматически - https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': 'error',

    /**
     * Проверяет нейминг типов, интерфейсов, енамов и т.д.
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/naming-convention/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Типы, енамы и интерфейсы должны именоваться в PascalCase (UPPER_CASE указан для возможности в енамах использовать ключи в этом формате)
      {
        format: ['PascalCase', 'UPPER_CASE'],
        selector: ['typeLike', 'enumMember', 'interface'],
      },
    ],

    /**
     * Удаляет ненужные спецификаторы неймспейсов
     *
     * 🔧 Исправляется автоматически - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /**
     * Разрешаем использование `sort()` и `toSorted()` без указания функции сравнения
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/require-array-sort-compare/
     */
    '@typescript-eslint/require-array-sort-compare': 'off',

    /**
     * Запрещает промисы в местах, не предназначенных для их обработки
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-misused-promises/
     */
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

    /**
     * Разрешает использовать "висящие промисы"
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-floating-promises/
     */
    '@typescript-eslint/no-floating-promises': 'off',

    /**
     * Убираем правило, иначе из некоторых функций нельзя будет доставать свойства деструктуризацией
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/unbound-method/
     */
    '@typescript-eslint/unbound-method': 'off',
  },
}
