import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from './types'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../constants.js'
import { getScriptFiles } from '../utils/files.js'
import { buildImportResolverSettings, buildParserOptions } from '../utils/tsConfigHelpers.js'

export const createSettingsConfigs = (context: Context) => {
  const configs: InfiniteDepthConfigWithExtends = [
    {
      files: [...JS_PATHS, ...TS_PATHS],
      languageOptions: {
        parserOptions: buildParserOptions(context.tsConfigs.script),
      },
      settings: buildImportResolverSettings(context.tsConfigs.script),
    },
  ]

  if (context.tsConfigs.vue) {
    configs.push({
      files: VUE_PATHS,
      languageOptions: {
        parserOptions: buildParserOptions(context.tsConfigs.vue),
      },
      settings: buildImportResolverSettings(context.tsConfigs.vue),
    })
  }

  if (context.tsConfigs.extraConfigs?.length) {
    configs.push(
      ...context.tsConfigs.extraConfigs.map((tsConfig) => {
        const { files, tsConfigPath, tsConfigRootDir } = tsConfig

        return {
          files: files ?? getScriptFiles(context),
          languageOptions: {
            parserOptions: buildParserOptions({
              tsConfigPath,
              tsConfigRootDir,
              projectService: tsConfig.projectService,
            }),
          },
          settings: buildImportResolverSettings({ tsConfigPath, tsConfigRootDir }),
        }
      })
    )
  }

  return configs
}
