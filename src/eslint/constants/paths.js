const JS_EXTENSIONS = 'js,mjs,cjs,jsx'
const TS_EXTENSIONS = 'ts,mts,cts,tsx'
const VUE_EXTENSIONS = 'vue'
const GQL_EXTENSIONS = 'gql,graphql'
const JS_TS_EXTENSIONS = [JS_EXTENSIONS, TS_EXTENSIONS].join(',')

export const JS_PATHS = [`*.{${JS_EXTENSIONS}}`, `**/*.{${JS_EXTENSIONS}}`]

export const TS_PATHS = [`*.{${TS_EXTENSIONS}}`, `**/*.{${TS_EXTENSIONS}}`]

export const VUE_PATHS = [`*.{${VUE_EXTENSIONS}}`, `**/*.{${VUE_EXTENSIONS}}`]

export const GQL_PATHS = [`*.{${GQL_EXTENSIONS}}`, `**/*.{${GQL_EXTENSIONS}}`]

export const TESTING_PATHS = [
  `**/*.test.{${JS_TS_EXTENSIONS}}`,
  `**/*.spec.{${JS_TS_EXTENSIONS}}`,
  `**/__test__/*.{${JS_TS_EXTENSIONS}}`,
  `**/__test__/**/*.{${JS_TS_EXTENSIONS}}`,
  `**/test/**/*.{${JS_TS_EXTENSIONS}}`,
  `**/test/mocks/**/*.{${JS_TS_EXTENSIONS}}`,
  `**/test/setup.{${JS_TS_EXTENSIONS}}`,
]
