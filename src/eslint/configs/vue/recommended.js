import vuePlugin from 'eslint-plugin-vue'
import { VUE_PATHS } from '../../constants/paths.js'

export const vueRecommendedConfigs = vuePlugin.configs['flat/recommended'].map((config) => ({
  ...config,
  // we must override cause vuePlugin.configs['flat/recommended'] has rules that will be applied to all files without this overriding
  files: [...VUE_PATHS],
}))
