import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context, CreateESLintConfigsOptions } from './types'
import { globalIgnores } from 'eslint/config'
import typescriptEslint from 'typescript-eslint'
import { DEFAULT_IGNORES } from '../constants.js'
import { baseConfigs, browserConfigs, nodeConfigs } from './base/baseConfigs.js'
import { commentsConfigs } from './comments/commentsConfigs.js'
import { createSettingsConfigs } from './createSettingsConfigs.js'
import { createGraphqlConfigs } from './graphql/createGraphqlConfigs.js'
import { createImportConfigs } from './import/createImportConfigs.js'
import { createTypeScriptConfigs } from './typescript/createTypeScriptConfigs.js'
import { createVueConfigs } from './vue/createVueConfigs.js'

export const createESLintConfigs = (
  userOptions: CreateESLintConfigsOptions,
  ...extraConfigs: InfiniteDepthConfigWithExtends[]
): InfiniteDepthConfigWithExtends => {
  const options = {
    ignore: [],
    browser: true,
    node: true,
    graphql: false,
    vue: false,
    ...userOptions,
  } as const
  const eslintConfigs: InfiniteDepthConfigWithExtends[] = []

  const context: Context = {
    browser: options.browser,
    node: options.node,
    graphql: options.graphql,
    vue: options.vue,
    tsConfigs: options.tsConfigs,
  }

  // Order is important for all configs!!!

  eslintConfigs.push(globalIgnores([...DEFAULT_IGNORES, ...(options.ignore ? options.ignore : [])]))

  if (context.browser) {
    eslintConfigs.push(browserConfigs)
  }
  if (context.node) {
    eslintConfigs.push(nodeConfigs)
  }

  eslintConfigs.push(commentsConfigs)

  eslintConfigs.push(createTypeScriptConfigs(context))

  eslintConfigs.push(createImportConfigs(context, options.import?.order?.pathGroups))

  if (context.graphql) {
    eslintConfigs.push(createGraphqlConfigs(context))
  }
  if (context.vue) {
    eslintConfigs.push(createVueConfigs(context))
  }

  eslintConfigs.push(baseConfigs)
  eslintConfigs.push(createSettingsConfigs(context))

  return typescriptEslint.config(eslintConfigs, extraConfigs ?? [])
}
