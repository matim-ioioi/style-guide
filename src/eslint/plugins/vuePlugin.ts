import type { Context } from '../configs/types'
import vueEslint from 'eslint-plugin-vue'
import typescriptEslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import { VUE_PATHS } from '../constants/paths.js'

export const vuePlugin = (context: Context): any => {
  let templateParser: string | typeof typescriptEslint.parser = 'espree'

  if (typeof context.vue === 'object' && context.vue.useTemplateTypeScriptParser) {
    templateParser = typescriptEslint.parser
  }

  return {
    name: 'style-guide-vue-plugin',
    files: [...VUE_PATHS],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: context.tsConfigs.script.tsConfigPath,
        tsconfigRootDir: context.tsConfigs.script.tsConfigRootDir,
        projectService: context.tsConfigs.script.projectService,
        parser: {
          js: typescriptEslint.parser,
          jsx: typescriptEslint.parser,
          cjs: typescriptEslint.parser,
          mjs: typescriptEslint.parser,

          ts: typescriptEslint.parser,
          tsx: typescriptEslint.parser,
          cts: typescriptEslint.parser,
          mts: typescriptEslint.parser,

          '<template>': templateParser,
        },
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vueEslint,
    },
  }
}
