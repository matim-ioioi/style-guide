import type EslintVuePluginType from 'eslint-plugin-vue'
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { createRequire } from 'node:module'
import vueEslint from 'eslint-plugin-vue'
import typescriptEslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import { VUE_PATHS } from '../../constants.js'

const require = createRequire(import.meta.url)

const vuePlugin = (context: Context): InfiniteDepthConfigWithExtends => {
  let templateParser: string | typeof typescriptEslint.parser = 'espree'

  if (typeof context.vue === 'object' && context.vue.useTemplateTypeScriptParser) {
    templateParser = typescriptEslint.parser
  }

  return {
    name: 'style-guide-vue-plugin',
    files: [...VUE_PATHS],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: context.tsConfigs.script.tsConfigPath,
        tsconfigRootDir: context.tsConfigs.script.tsConfigRootDir,
        projectService: context.tsConfigs.script.projectService,
        parser: {
          js: typescriptEslint.parser,
          jsx: typescriptEslint.parser,
          cjs: typescriptEslint.parser,
          mjs: typescriptEslint.parser,

          ts: typescriptEslint.parser,
          tsx: typescriptEslint.parser,
          cts: typescriptEslint.parser,
          mts: typescriptEslint.parser,

          '<template>': templateParser,
        },
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vueEslint,
    },
  }
}

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
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', { ignores: [], registeredComponentsOnly: false }],
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
