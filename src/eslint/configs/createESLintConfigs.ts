import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context, CreateESLintConfigsOptions } from './types'
import { globalIgnores } from 'eslint/config'
import typescriptEslint from 'typescript-eslint'
import defaultIgnores from '../constants/ignores.js'
import { baseConfigs } from './base/baseConfigs.js'
import { browserConfigs } from './base/browserConfigs.js'
import { nodeConfigs } from './base/nodeConfigs.js'
import { commentsConfigs } from './comments/commentsConfigs.js'
import { createSettingsConfigs } from './createSettingsConfigs.js'
import { graphqlConfigs } from './graphql/graphqlConfigs.js'
import { createImportConfigs } from './import/createImportConfigs.js'
import { createPrettierConfigs } from './prettier/createPrettierConfigs.js'
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
    vue: true,
    ...userOptions,
  }
  const eslintConfigs: InfiniteDepthConfigWithExtends[] = []

  const context: Context = {
    browser: options.browser,
    node: options.node,
    graphql: options.graphql,
    vue: options.vue,
    tsConfigs: options.tsConfigs,
  }

  // Order is important for all configs!!!

  eslintConfigs.push(globalIgnores([...defaultIgnores, ...(options.ignore ? options.ignore : [])]))

  if (context.node) {
    eslintConfigs.push(browserConfigs)
  }
  if (context.browser) {
    eslintConfigs.push(nodeConfigs)
  }

  eslintConfigs.push(commentsConfigs)

  eslintConfigs.push(createTypeScriptConfigs(context))

  eslintConfigs.push(createImportConfigs(context, options.import?.order?.pathGroups))

  if (context.graphql) {
    eslintConfigs.push(graphqlConfigs)
  }
  if (context.vue) {
    eslintConfigs.push(createVueConfigs(context))
  }

  eslintConfigs.push(baseConfigs)
  eslintConfigs.push(createPrettierConfigs(context))
  eslintConfigs.push(createSettingsConfigs(context))

  return typescriptEslint.config(eslintConfigs, extraConfigs ?? [])
}
