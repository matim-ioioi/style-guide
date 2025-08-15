import vueEslint from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { vueParserOptions } from '../constants/parserOptions.js'
import { VUE_PATHS } from '../constants/paths.js'

export const vuePlugin = {
  name: 'style-guide-vue-plugin',
  files: [...VUE_PATHS],
  languageOptions: {
    parser: vueParser,
    parserOptions: vueParserOptions,
  },
  plugins: {
    vue: vueEslint,
  },
}
