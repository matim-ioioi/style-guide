import type { Context } from '../types'
import type { createImportOrderRules } from './utils/createImportOrderRules.js'
import { importPlugin } from '../../plugins/importPlugin.js'
import { importConfigDefault } from './importConfigDefault.js'
import { importConfigSettings } from './importConfigSettings.js'
import { importConfigTesting } from './importConfigTesting.js'

export const createImportConfigs = (
  context: Context,
  pathGroups?: Parameters<typeof createImportOrderRules>[0]
): any[] => {
  return [
    importPlugin(context),
    importConfigDefault(context, pathGroups),
    importConfigTesting(context, pathGroups),
    importConfigSettings(context),
  ]
}
