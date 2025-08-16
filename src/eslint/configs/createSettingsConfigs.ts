import type { Context } from './types'
import { JS_PATHS, TS_PATHS, VUE_PATHS } from '../constants/paths.js'

type ESLintConfigSettings = {
  'import-x/resolver-next': {
    typescript: {
      project: string
    }
    vue?: {
      project: string
    }
  }
}

type ESLintConfig = {
  files: string[]
  languageOptions: {
    parserOptions: {
      project: string
      tsconfigRootDir: string
    }
  }
  settings: ESLintConfigSettings
}

export const createSettingsConfigs = (context: Context & { tsConfigs: NonNullable<Context['tsConfigs']> }) => {
  const configs: ESLintConfig[] = [
    {
      files: [...JS_PATHS, ...TS_PATHS],
      languageOptions: {
        parserOptions: {
          project: context.tsConfigs.script.tsConfigPath,
          tsconfigRootDir: context.tsConfigs.script.tsConfigRootDir,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: context.tsConfigs.script.tsConfigPath,
          },
        },
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
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: context.tsConfigs.vue.tsConfigPath,
          },
          vue: {
            project: context.tsConfigs.vue.tsConfigPath,
          },
        },
      },
    })
  }

  context.tsConfigs.extraConfigs?.map((tsConfig) => {
    const { files, tsConfigPath, tsConfigRootDir } = tsConfig

    const settings: ESLintConfigSettings = {
      'import-x/resolver-next': {
        typescript: {
          project: tsConfigPath,
        },
      },
    }

    if (files?.some((file) => file.endsWith('.vue'))) {
      settings['import-x/resolver-next'].vue = {
        project: tsConfigPath,
      }
    }

    return {
      files: files ?? [...JS_PATHS, ...TS_PATHS, ...(context.vue ? VUE_PATHS : [])],
      languageOptions: {
        parserOptions: {
          project: tsConfigPath,
          tsconfigRootDir: tsConfigRootDir,
        },
      },
      settings,
    }
  })

  return configs
}
