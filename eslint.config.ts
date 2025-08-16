import { createESLintConfigs } from './src/eslint/configs/createESLintConfigs.js'

export default createESLintConfigs({
  graphql: false,
  vue: false,
  tsConfigs: {
    script: {
      tsConfigPath: './tsconfig.json',
      tsConfigRootDir: import.meta.dirname,
    },
  },
})
