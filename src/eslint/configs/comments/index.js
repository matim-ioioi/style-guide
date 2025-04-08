import commentsEslint from '@eslint-community/eslint-plugin-eslint-comments/configs'

export const commentsConfigs = [
  {
    name: 'style-guide-comments',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- нет типизации
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- нет типизации
      ...commentsEslint.recommended.plugins,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- нет типизации
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- нет типизации
      ...commentsEslint.recommended.rules,

      /**
       * Обязывает подписывать комментарии при любых `eslint-disable` командах
       *
       * 🚫 Не исправляется автоматически - https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
       */
      '@eslint-community/eslint-comments/require-description': 'error',

      /**
       * [ВЫКЛЮЧЕНО] Обязывает обязательно использовать `eslint-enable` для `eslint-disable`
       *
       * 🚫 Не исправляется автоматически - https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
       */
      '@eslint-community/eslint-comments/disable-enable-pair': 'off',

      /**
       * [ВЫКЛЮЧЕНО] Обязывает обязательно использовать конкретные правила при выключении
       *
       * 🚫 Не исправляется автоматически - https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
       */
      '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
    },
  },
]
