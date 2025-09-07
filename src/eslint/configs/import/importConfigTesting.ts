import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { TESTING_PATHS } from '../../constants/paths.js'
import { createImportOrderRules } from './utils/createImportOrderRules.js'

export const importConfigTesting = (
  context: Context,
  pathGroups?: Parameters<typeof createImportOrderRules>[0]
): InfiniteDepthConfigWithExtends => {
  const files = [...TESTING_PATHS]

  if (context.testing?.paths) {
    files.concat(context.testing.paths)
  }

  return {
    name: 'style-guide-import-testing',
    files,
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
