import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from './types'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../constants/paths.js'

export const createSettingsConfigs = (context: Context) => {
  const configs: InfiniteDepthConfigWithExtends = [
    {
      files: [...JS_PATHS, ...TS_PATHS],
      languageOptions: {
        parserOptions: {
          project: context.tsConfigs.script.tsConfigPath,
          tsconfigRootDir: context.tsConfigs.script.tsConfigRootDir,
          projectService: context.tsConfigs.script.projectService ?? false,
        },
      },
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            project: context.tsConfigs.script.tsConfigPath,
            alwaysTryTypes: true,
          }),
        ],
      },
    },
  ]

  if (context.tsConfigs.vue) {
    configs.push({
      files: VUE_PATHS,
      languageOptions: {
        parserOptions: {
          project: context.tsConfigs.vue.tsConfigPath,
          tsconfigRootDir: context.tsConfigs.vue.tsConfigRootDir,
          projectService: context.tsConfigs.vue.projectService ?? false,
        },
      },
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            project: context.tsConfigs.vue.tsConfigPath,
            alwaysTryTypes: true,
          }),
        ],
      },
    })
  }

  context.tsConfigs.extraConfigs?.map((tsConfig) => {
    const { files, tsConfigPath, tsConfigRootDir } = tsConfig

    return {
      files: files ?? [...JS_PATHS, ...TS_PATHS, ...(context.vue ? VUE_PATHS : [])],
      languageOptions: {
        parserOptions: {
          project: tsConfigPath,
          tsconfigRootDir: tsConfigRootDir,
          projectService: tsConfig.projectService ?? false,
        },
      },
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            project: tsConfigPath,
            alwaysTryTypes: true,
          }),
        ],
      },
    }
  })

  return configs
}
