import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { tsPlugin } from '../../plugins/tsPlugin.js'
import { tsConfigDefault } from './tsConfigDefault.js'
import { tsConfigRecommended } from './tsConfigRecommended.js'
import { tsConfigTesting } from './tsConfigTesting.js'

export const createTypeScriptConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  return [...tsConfigRecommended(context), tsPlugin(context), tsConfigDefault(context), tsConfigTesting(context)]
}
