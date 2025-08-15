import { VUE_PATHS } from '../../constants/paths.js'

export const vueConfigDefault = {
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
