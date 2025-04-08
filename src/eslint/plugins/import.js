import importEslint from 'eslint-plugin-import-x'
import { meta as importEslintMeta } from 'eslint-plugin-import-x/meta'

export const importPlugin = {
  name: 'style-guide-import-plugin',
  plugins: {
    'import-x': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- unknown error type
      meta: importEslintMeta,
      rules: importEslint.rules,
    },
  },
}
