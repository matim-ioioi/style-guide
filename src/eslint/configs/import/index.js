import { importPlugin } from '../../plugins/import.js'
import { importDefaultConfig } from './default.js'
import { importSettingsConfig } from './settings.js'
import { importTestingConfig } from './testing.js'

export const importConfigs = [importPlugin, importDefaultConfig, importTestingConfig, importSettingsConfig]
