// File glob patterns
const JS_EXTENSIONS = 'js,mjs,cjs,jsx'
const TS_EXTENSIONS = 'ts,mts,cts,tsx'
const GQL_EXTENSIONS = 'gql,graphql'
const JS_TS_EXTENSIONS = [JS_EXTENSIONS, TS_EXTENSIONS].join(',')

export const JS_PATHS = [`*.{${JS_EXTENSIONS}}`, `**/*.{${JS_EXTENSIONS}}`]

export const TS_PATHS = [`*.{${TS_EXTENSIONS}}`, `**/*.{${TS_EXTENSIONS}}`]

export const VUE_PATHS = [`*.vue`, `**/*.vue`]

export const GQL_PATHS = [`*.{${GQL_EXTENSIONS}}`, `**/*.{${GQL_EXTENSIONS}}`]

export const TESTING_PATHS = [
  `**/*.test.{${JS_TS_EXTENSIONS}}`,
  `**/*.spec.{${JS_TS_EXTENSIONS}}`,
  `**/__test__/*.{${JS_TS_EXTENSIONS}}`,
  `**/__test__/**/*.{${JS_TS_EXTENSIONS}}`,
]

// Default ignores
export const DEFAULT_IGNORES = [
  // node_modules
  'node_modules',

  // usually build dirs
  '**/dist/**',
  '**/.dist/**',

  // nuxt
  '**/.nuxt/**',
  '**/.output/**',

  // vitepress
  '**/.vitepress/**',
]
