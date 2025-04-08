import { TESTING_PATHS } from '../../constants/paths.js'

export const tsTestingConfig = {
  name: 'style-guide-typescript-testing',
  files: [...TESTING_PATHS],
  rules: {
    /**
     * Разрешаем использование оператора `!`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-non-null-assertion/
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * Можно использовать функции, возвращающие тип `any`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unsafe-return/
     */
    '@typescript-eslint/no-unsafe-return': 'off',

    /**
     * Разрешаем вызовы со значениями типа `any`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unsafe-call/
     */
    '@typescript-eslint/no-unsafe-call': 'off',

    /**
     * Разрешаем обращение к свойствам объектов с типом `any`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unsafe-member-access/
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',

    /**
     * Можно присваивать значения с типом `any` переменным и свойствам
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unsafe-assignment/
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',

    /**
     * Можно вызывать функции с параметрами типа `any`
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-unsafe-argument/
     */
    '@typescript-eslint/no-unsafe-argument': 'off',

    /**
     * Запрещаем использовать "висящие промисы" для тестов
     *
     * 🚫 Не исправляется автоматически - https://typescript-eslint.io/rules/no-floating-promises/
     */
    '@typescript-eslint/no-floating-promises': 'warn',
  },
}
