import { VUE_PATHS } from '../../constants/paths.js'

export const vueDefaultConfig = {
  name: 'style-guide-vue-default',
  files: [...VUE_PATHS],
  rules: {
    /**
     * Убираем бан на использование `v-text` и `v-html`
     *
     * 🚫 Не исправляется автоматически - https://eslint.vuejs.org/rules/no-v-text-v-html-on-component
     */
    'vue/no-v-text-v-html-on-component': 'off',

    /**
     * Убираем бан на использование `v-html`
     *
     * 🚫 Не исправляется автоматически - https://eslint.vuejs.org/rules/no-v-html
     */
    'vue/no-v-html': 'off',

    /**
     * Разрешаем не указывать свойства по умолчанию для `Props` у vue-компонентов
     *
     * 🚫 Не исправляется автоматически - https://eslint.vuejs.org/rules/require-default-prop
     */
    'vue/require-default-prop': 'off',

    /**
     * Запрещает side-effects в `computed`
     *
     * 🚫 Не исправляется автоматически - https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties
     */
    'vue/no-side-effects-in-computed-properties': 'error',

    /**
     * Форматирование отступов между фигурными скобками
     *
     * 🔧 Исправляется автоматически - https://eslint.vuejs.org/rules/object-curly-spacing
     */
    'vue/object-curly-spacing': ['error', 'always', { objectsInObjects: true, arraysInObjects: true }],

    /**
     * Используем kebab-case для именований компонентов в шаблоне
     *
     * 🔧 Исправляется автоматически - https://eslint.vuejs.org/rules/component-name-in-template-casing
     */
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { ignores: [] }],

    /**
     * Используем kebab-case для именований хендлеров в шаблоне
     *
     * 🔧 Исправляется автоматически - https://eslint.vuejs.org/rules/v-on-event-hyphenation
     */
    'vue/v-on-event-hyphenation': ['error', 'always', { ignore: ['update:modelValue'] }],

    /**
     * Используем более, чем одно слово в названиях компонентов | ignore: ['index']
     *
     * 🚫 Не исправляется автоматически - https://eslint.vuejs.org/rules/multi-word-component-names
     */
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],

    /**
     * Используем самозакрывающиеся теги в шаблоне
     *
     * 🔧 Исправляется автоматически - https://eslint.vuejs.org/rules/html-self-closing
     */
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
