import type GraphqlPluginType from '@graphql-eslint/eslint-plugin'
import type { ESLint } from 'eslint'
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import type { Context } from '../types'
import { createRequire } from 'node:module'
import { GQL_PATHS } from '../../constants/paths.js'

const require = createRequire(import.meta.url)

export const createGraphqlConfigs = (context: Context): InfiniteDepthConfigWithExtends => {
  if (!context.graphql) {
    return []
  }

  const graphqlPlugin = require('@graphql-eslint/eslint-plugin') as typeof GraphqlPluginType

  return [
    {
      name: 'style-guide-graphql',
      files: [...GQL_PATHS],
      plugins: {
        '@graphql-eslint': graphqlPlugin as ESLint.Plugin,
      },
      languageOptions: {
        parser: graphqlPlugin.parser,
        parserOptions: {
          graphQLConfig: {
            schema: context.graphql.schema,
            documents: context.graphql.documents,
            operations: context.graphql.operations,
          },
        },
      },
      rules: {
        '@graphql-eslint/alphabetize': [
          'error',
          {
            definitions: true,
            selections: ['OperationDefinition', 'FragmentDefinition'],
            values: true,
            fields: ['ObjectTypeDefinition', 'InterfaceTypeDefinition', 'InputObjectTypeDefinition'],
            groups: ['id', 'name', '*'],
          },
        ],
        '@graphql-eslint/known-argument-names': 'error',
        '@graphql-eslint/known-directives': 'error',
        '@graphql-eslint/known-fragment-names': 'error',
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            FragmentDefinition: { style: 'PascalCase', requiredSuffixes: ['Fragment'] },
            OperationDefinition: { style: 'camelCase' },
          },
        ],
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/no-deprecated': 'warn',
        '@graphql-eslint/no-duplicate-fields': 'error',
        '@graphql-eslint/no-fragment-cycles': 'error',
        '@graphql-eslint/require-deprecation-reason': 'warn',
        '@graphql-eslint/scalar-leafs': 'error',
        '@graphql-eslint/unique-argument-names': 'error',
        '@graphql-eslint/unique-directive-names': 'error',
        '@graphql-eslint/unique-enum-value-names': 'error',
        '@graphql-eslint/unique-field-definition-names': 'error',
        '@graphql-eslint/unique-fragment-name': 'error',
        '@graphql-eslint/unique-operation-name': 'error',
        '@graphql-eslint/unique-type-names': 'error',
        '@graphql-eslint/unique-variable-names': 'error',
      },
    },
  ]
}
