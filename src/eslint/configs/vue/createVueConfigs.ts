import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { vuePlugin } from '../../plugins/vuePlugin.js'
import { vueConfigDefault } from './vueConfigDefault.js'
import { vueConfigsRecommended } from './vueConfigsRecommended.js'

export const createVueConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  return [vueConfigsRecommended, vuePlugin(context), vueConfigDefault]
}
