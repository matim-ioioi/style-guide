import graphqlPlugin from '@graphql-eslint/eslint-plugin'
import { GQL_PATHS } from '../../constants/paths.js'

export const graphqlConfigs = [
  {
    name: 'style-guide-graphql',
    files: [...GQL_PATHS],
    plugins: {
      '@graphql-eslint': graphqlPlugin,
    },
    languageOptions: {
      parser: graphqlPlugin.parser,
      parserOptions: {
        project: false,
      },
    },
    rules: {
      /**
       * Сортировка по алфавиту
       *
       * 🔧 Исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/alphabetize
       */
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

      /**
       * Проверка на существующие аргументы
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/known-argument-names
       */
      '@graphql-eslint/known-argument-names': 'error',

      /**
       * Проверка на существующие директивы
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/known-directives
       */
      '@graphql-eslint/known-directives': 'error',

      /**
       * Проверка на существующие фрагменты
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/known-fragment-names
       */
      '@graphql-eslint/known-fragment-names': 'error',

      /**
       * Проверка на существующие типы
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/known-type-names
       */
      '@graphql-eslint/known-type-names': 'error',

      /**
       * Проверяет нейминг query, mutation, subscription, type, fragment и тд
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/naming-convention
       */
      '@graphql-eslint/naming-convention': [
        'error',
        {
          FragmentDefinition: { style: 'PascalCase', requiredSuffixes: ['Fragment'] },
          OperationDefinition: { style: 'camelCase' },
        },
      ],

      /**
       * Запрещает использовать анонимные операции
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/no-anonymous-operations
       */
      '@graphql-eslint/no-anonymous-operations': 'error',

      /**
       * Запрещает использовать deprecated свойства
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/no-deprecated
       */
      '@graphql-eslint/no-deprecated': 'warn',

      /**
       * Запрещает использовать дубликаты свойств
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/no-duplicate-fields
       */
      '@graphql-eslint/no-duplicate-fields': 'error',

      /**
       * Запрещает использовать цикличные фрагменты
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/no-fragment-cycles
       */
      '@graphql-eslint/no-fragment-cycles': 'error',

      /**
       * Запрещает использовать @deprecated без указания reason
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason
       */
      '@graphql-eslint/require-deprecation-reason': 'warn',

      /**
       * Проверяет, что все поля без подвыборок скалярного типа или перечисление
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/scalar-leafs
       */
      '@graphql-eslint/scalar-leafs': 'error',

      /**
       * Проверяет на уникальность имён аргументов
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-argument-names
       */
      '@graphql-eslint/unique-argument-names': 'error',

      /**
       * Проверяет на уникальность имена директив
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-directive-names
       */
      '@graphql-eslint/unique-directive-names': 'error',

      /**
       * Проверяет на уникальность значений в enum
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-enum-value-names
       */
      '@graphql-eslint/unique-enum-value-names': 'error',

      /**
       * Проверяет на уникальность полей в типах
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-field-definition-names
       */
      '@graphql-eslint/unique-field-definition-names': 'error',

      /**
       * Проверяет на уникальность имён фрагментов
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-fragment-name
       */
      '@graphql-eslint/unique-fragment-name': 'error',

      /**
       * Проверяет на уникальность имён операций
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-operation-name
       */
      '@graphql-eslint/unique-operation-name': 'error',

      /**
       * Проверяет на уникальность имён типов
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-type-names
       */
      '@graphql-eslint/unique-type-names': 'error',

      /**
       * Проверяет на уникальность имён переменных
       *
       * 🚫 Не исправляется автоматически - https://the-guild.dev/graphql/eslint/rules/unique-variable-names
       */
      '@graphql-eslint/unique-variable-names': 'error',
    },
  },
]
