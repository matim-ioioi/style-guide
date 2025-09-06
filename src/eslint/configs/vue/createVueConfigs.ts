import type { Context } from '../types'
import { vuePlugin } from '../../plugins/vuePlugin.js'
import { vueConfigDefault } from './vueConfigDefault.js'
import { vueConfigsRecommended } from './vueConfigsRecommended.js'

export const createVueConfigs = (context: Context): any[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- hard typings
  return [vueConfigsRecommended, vuePlugin(context), vueConfigDefault]
}
