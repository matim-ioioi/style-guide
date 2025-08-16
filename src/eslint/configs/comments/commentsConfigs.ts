// @ts-expect-error -- missed types
import commentsEslint from '@eslint-community/eslint-plugin-eslint-comments/configs'

export const commentsConfigs = [
  {
    name: 'style-guide-comments',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- missed typings
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- missed typings
      ...commentsEslint.recommended.plugins,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- missed typings
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- missed typings
      ...commentsEslint.recommended.rules,
      '@eslint-community/eslint-comments/require-description': 'error',
      '@eslint-community/eslint-comments/disable-enable-pair': 'off',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
    },
  },
]
