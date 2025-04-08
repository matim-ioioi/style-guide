import { globalIgnores } from 'eslint/config'
import prettierConfigs from 'eslint-plugin-prettier/recommended'
import defaultIgnores from '../constants/ignores.js'
import { baseConfigs } from './base/index.js'
import { commentsConfigs } from './comments/index.js'
import { graphqlConfigs } from './graphql/index.js'
import { importConfigs } from './import/index.js'
import { tsConfigs } from './typescript/index.js'
import { vueConfigs } from './vue/index.js'

export default [
  globalIgnores(defaultIgnores),

  ...commentsConfigs,
  ...tsConfigs,
  ...importConfigs,
  ...graphqlConfigs,
  ...vueConfigs,
  ...baseConfigs,

  prettierConfigs,
]
