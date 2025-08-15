import type { Context } from '../types'
import { tsPlugin } from '../../plugins/tsPlugin.js'
import { tsConfigDefault } from './tsConfigDefault.js'
import { tsConfigRecommended } from './tsConfigRecommended.js'
import { tsConfigTesting } from './tsConfigTesting.js'

export const createTypeScriptConfigs = (context: Context): any[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment -- hard typings
  return [...tsConfigRecommended(context), tsPlugin(context), tsConfigDefault(context), tsConfigTesting(context)]
}
