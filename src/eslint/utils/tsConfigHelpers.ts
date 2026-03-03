import type { TypeScriptConfig } from '../configs/types'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export const buildParserOptions = (tsConfig: Omit<TypeScriptConfig, 'files'>) => ({
  project: tsConfig.tsConfigPath,
  tsconfigRootDir: tsConfig.tsConfigRootDir,
  projectService: tsConfig.projectService ?? false,
})

export const buildImportResolverSettings = (tsConfig: Omit<TypeScriptConfig, 'files'>) => ({
  'import-x/resolver-next': [
    createTypeScriptImportResolver({
      project: tsConfig.tsConfigPath,
      alwaysTryTypes: true,
    }),
  ],
})
