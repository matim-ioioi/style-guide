import typescriptEslint from 'typescript-eslint'

export const defaultParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: true,
}

export const vueParserOptions = {
  ...defaultParserOptions,
  parser: {
    js: typescriptEslint.parser,
    jsx: typescriptEslint.parser,
    cjs: typescriptEslint.parser,
    mjs: typescriptEslint.parser,

    ts: typescriptEslint.parser,
    tsx: typescriptEslint.parser,
    cts: typescriptEslint.parser,
    mts: typescriptEslint.parser,

    '<template>': 'espree',
  },
  ecmaFeatures: {
    jsx: true,
  },
  extraFileExtensions: ['.vue'],
}
