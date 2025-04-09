import { VUE_PATHS } from '../../constants/paths.js'
import { importPlugin } from '../../plugins/import.js'
import { tsPlugin } from '../../plugins/typescript.js'
import { vuePlugin } from '../../plugins/vue.js'
import { importDefaultConfig } from '../import/default.js'
import { importSettingsConfig } from '../import/settings.js'
import { tsDefaultConfig } from '../typescript/default.js'
import { tsRecommendedTypeCheckedConfigs } from '../typescript/recommendedTypeChecked.js'
import { vueDefaultConfig } from './default.js'
import { vueRecommendedConfigs } from './recommended.js'

export const vueConfigs = [
  //#region Apply `import` configs for vue files too
  { ...importPlugin, files: [...VUE_PATHS] },
  { ...importDefaultConfig, files: [...VUE_PATHS] },
  { ...importSettingsConfig, files: [...VUE_PATHS] },
  //#endregion Apply `import` configs for vue files too

  //#region Apply `typescript` configs for vue files too
  { ...tsPlugin, files: [...VUE_PATHS] },
  tsRecommendedTypeCheckedConfigs.map((config) => ({
    ...config,
    files: [...VUE_PATHS],
  })),
  { ...tsDefaultConfig, files: [...VUE_PATHS] },
  //#endregion Apply `typescript` configs for vue files too

  ...vueRecommendedConfigs,
  vuePlugin,
  vueDefaultConfig,
]
