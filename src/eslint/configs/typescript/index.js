import { tsPlugin } from '../../plugins/typescript.js'
import { tsDefaultConfig } from './default.js'
import { tsRecommendedTypeCheckedConfigs } from './recommendedTypeChecked.js'
import { tsTestingConfig } from './testing.js'

export const tsConfigs = [...tsRecommendedTypeCheckedConfigs, tsPlugin, tsDefaultConfig, tsTestingConfig]
