import { TESTING_PATHS } from '../../constants/paths.js'
import { createImportOrderRules } from './utils/createImportOrderRules.js'

export const importTestingConfig = {
  name: 'style-guide-import-testing',
  files: [...TESTING_PATHS],
  rules: {
    /**
     * В тестах оставляем warn для циклических зависимостей
     * По возможности по ресурсам поправить - тесты будут проходить быстрее
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import-x/no-cycle': ['warn', { ignoreExternal: true }],

    /**
     * Для тестов убираем проверку на импорты по путям
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
     */
    'import-x/no-restricted-paths': 'off',

    /**
     * Для тестов добавляем новую группу по сортировке, чтобы моки были самыми первыми импортами
     * Необходимо для корректной работы моков в Jest (такая специфика у jest.mock())
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import-x/order': createImportOrderRules([{ pattern: '**/test/**/mocks/*', group: 'builtin', position: 'before' }]),
  },
}
