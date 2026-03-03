import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import typescriptEslint from 'typescript-eslint'
import { getScriptFiles, getTestingFiles } from '../../utils/files.js'

const tsPlugin = (context: Context): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-typescript-plugin',
    files: getScriptFiles(context),
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: context.tsConfigs.script.tsConfigPath,
        tsconfigRootDir: context.tsConfigs.script.tsConfigRootDir,
        projectService: context.tsConfigs.script.projectService,
      },
    },
  }
}

const tsConfigRecommended = (context: Context): InfiniteDepthConfigWithExtends[] => {
  const files = getScriptFiles(context)

  return typescriptEslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    // we must override cause typescriptEslint.configs.recommendedTypeChecked has rules that will be applied to all files without this overriding
    files,
  }))
}

const tsConfigDefault = (context: Context): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-typescript-default',
    files: getScriptFiles(context),
    rules: {
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': false,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase', 'UPPER_CASE'],
          selector: ['typeLike', 'enumMember', 'interface'],
        },
      ],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/require-array-sort-compare': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  }
}

const tsConfigTesting = (context: Context): InfiniteDepthConfigWithExtends => {
  return {
    name: 'style-guide-typescript-testing',
    files: getTestingFiles(context),
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
    },
  }
}

export const createTypeScriptConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  return [...tsConfigRecommended(context), tsPlugin(context), tsConfigDefault(context), tsConfigTesting(context)]
}
