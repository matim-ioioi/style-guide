import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import prettierConfigs from 'eslint-plugin-prettier/recommended'
import { getScriptFiles } from '../../utils/files.js'

export const createPrettierConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  return [{ ...prettierConfigs, files: getScriptFiles(context) }]
}
