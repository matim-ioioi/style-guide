import type { Context } from '../types'
import { TESTING_PATHS } from '../../constants/paths.js'
import { createImportOrderRules } from './utils/createImportOrderRules.js'

export const importConfigTesting = (context: Context, pathGroups?: Parameters<typeof createImportOrderRules>[0]) => {
  return {
    name: 'style-guide-import-testing',
    files: [...TESTING_PATHS],
    rules: {
      'import-x/no-cycle': ['warn', { ignoreExternal: true }],
      'import-x/no-restricted-paths': 'off',
      'import-x/order': createImportOrderRules({
        prepend: [
          { pattern: '**/test/**/mocks/*', group: 'builtin', position: 'before' },
          ...(pathGroups?.prepend ?? []),
        ],
        append: pathGroups?.append,
      }),
    },
  }
}
