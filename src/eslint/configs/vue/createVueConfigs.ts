import type EslintVuePluginType from 'eslint-plugin-vue'
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { createRequire } from 'node:module'
import { VUE_PATHS } from '../../constants/paths.js'
import { vuePlugin } from '../../plugins/vuePlugin.js'

const require = createRequire(import.meta.url)

export const createVueConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  const eslintVuePlugin = require('eslint-plugin-vue') as typeof EslintVuePluginType

  const vueConfigRecommended: InfiniteDepthConfigWithExtends = eslintVuePlugin.configs['flat/recommended'].map(
    (config) => ({
      ...config,
      // must override cause vuePlugin.configs['flat/recommended'] has rules that will be applied to all files without this overriding
      files: [...VUE_PATHS],
    })
  )

  const vueConfigDefault: InfiniteDepthConfigWithExtends = {
    name: 'style-guide-vue-default',
    files: [...VUE_PATHS],
    rules: {
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', { ignores: [] }],
      'vue/v-on-event-hyphenation': ['error', 'always', { ignore: ['update:modelValue'] }],
      'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  }

  return [vuePlugin(context), vueConfigRecommended, vueConfigDefault]
}
