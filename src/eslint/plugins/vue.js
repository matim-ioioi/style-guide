import vueEslint from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { vueParserOptions } from '../constants/parserOptions.js'

export const vuePlugin = {
  name: 'style-guide-vue-plugin',
  languageOptions: {
    parser: vueParser,
    parserOptions: vueParserOptions,
  },
  plugins: {
    vue: vueEslint,
  },
}
