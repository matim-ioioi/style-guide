# Configure ESLint
This repository have out-of-the-box settings for ESLint to prettify your code and make it more safety

## createESLintConfigs
To configure ESLint, create file named `eslint.config.js` in your project root.\
In this file use the function, that will create all configs for your ESLint, named `createESLintConfigs`:

```javascript
import { createESLintConfigs } from '@timmio/style-guide/eslint'

export default createESLintConfigs(...)
```

## Parameters

### `ignore`
:::info description
Type: `string[]`

Default: `['node_modules', '**/dist/**', '**/.dist/**', '**/.nuxt/**', '**/.output/**', '**/.vitepress/**']`

In some cases you need to exclude some files or folders from linting. This parameter helps you to do it.

Specify one or more glob patterns to exclude what you need.
These patterns are added after the default patterns.
:::

### `browser`
:::info description
Type: `boolean`

Default: `true`

Include browser environment
:::

### `node`
:::info description
Type: `boolean`

Default: `true`

Include node environment
:::

### `graphql`
:::info description
Type: `boolean`

Default: `false`

Enable GraphQL plugins and rules for linting `.gql` and `.graphql` files
:::

### `vue`
:::info description
Type: `boolean`

Default: `false`

Enable Vue plugins and rules for linting `.vue` files
:::

### `tsConfigs` (advanced)
:::info description
Type: `TypeScriptConfigsOption`

```typescript
type TypeScriptConfigsOption = {
  script: Omit<TypeScriptConfig, 'files'>  // settings of tsconfigs for js,mjs,cjs,jsx,ts,mts,cts,tsx files
  vue?: Omit<TypeScriptConfig, 'files'>    // settings of tsconfigs for vue files
  extraConfigs?: TypeScriptConfig[]        // your custom settings of tsconfigs
}

type TypeScriptConfig = {
  files?: string[]          // glob patterns for matching files that will be linting by this config
  tsConfigPath: string      // similar option for project in parserOptions for https://typescript-eslint.io/ or https://github.com/vuejs/vue-eslint-parser 
  tsConfigRootDir: string   // similar option for tsconfigRootDir in parserOptions for https://typescript-eslint.io/ or https://github.com/vuejs/vue-eslint-parser 
  projectService?: boolean  // similar option for projectService in parserOptions for https://typescript-eslint.io/ or https://github.com/vuejs/vue-eslint-parser 
}
```

Settings for tsconfigs (Type-Checking by ESLint provided by these configurations)
:::

### `testing` (advanced)
:::info description
Type: `TestingConfigsOption`

```typescript
type TestingConfigsOption = {
  paths?: string[]
}
```

Some rules disabled (or enabled) for testing environment only\
Testing paths defaults are:
```typescript
[
  '**/*.test.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
  '**/*.spec.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
  '**/__test__/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
  '**/__test__/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'
]
```

You can add your own set of paths to these paths.
:::

### `import` (advanced)
:::info description
Type: `ImportConfigsOption`

```typescript
type ImportConfigsOption = {
  order?: {
    pathGroups?: {
      prepend?: { pattern: string; group: string; position: string }[]
      append?: { pattern: string; group: string; position: string }[]
    }
  }
}
```

These are the settings for sorting imports\
Defaults are:
```typescript
[
  { pattern: '@/**', group: 'internal', position: 'after' },
  { pattern: '~/**', group: 'internal', position: 'after' },
  { pattern: '@root/**', group: 'internal', position: 'after' },
  { pattern: '@app/**', group: 'parent', position: 'before' },
  { pattern: '@pages/**', group: 'parent', position: 'before' },
  { pattern: '@widgets/**', group: 'parent', position: 'before' },
  { pattern: '@features/**', group: 'parent', position: 'before' },
  { pattern: '@entities/**', group: 'parent', position: 'before' },
  { pattern: '@shared/**', group: 'parent', position: 'before' },
]
```

You can add your own set of paths to these paths to order imports.
:::

## Example

:::code-group
```javascript [eslint.config.js]
import { createESLintConfigs } from '@timmio/style-guide/eslint'

export default createESLintConfigs(
  {
    // If you need specify custom excluded paths
    ignore: ['.some_folder_to_be_exluded'],
    
    browser: true,  // If you dont use browser env please provide `false`
    node: true,     // If you dont use node env please provide `false`
    
    // If you use GraphQL
    graphql: {
      schema: './src/graphql/schema.graphql',  // your path to schema
      documents: './src/**/*.{gql,graphql}',   // your pattern to documents
      operations: './src/**/*.{gql,graphql}',  // your pattern to operations
    },
    
    vue: true,  // If you dont use vue please provide `false`
    
    tsConfigs: {
      script: {
        tsConfigPath: './tsconfig.json',
        tsConfigRootDir: import.meta.dirname,
      },
      
      // If you use vue
      vue: {
        tsConfigPath: './tsconfig.vue.json',
        tsConfigRootDir: import.meta.dirname,
      },
      
      // If you need specify custom tsconfigs for some files
      extraConfigs: [
        {
          files: ['./src/server/*.{js,ts}', './src/server/**/*.{js,ts}'],
          tsConfigPath: './src/server/tsconfig.json',
          tsConfigRootDir: import.meta.dirname,
        },
      ],
    },
    
    // If you need specify custom rules for imports order
    import: {
      order: {
        pathGroups: {
          append: [
            { pattern: '@components/**', group: 'parent', position: 'before' },
            { pattern: '@constants/**', group: 'parent', position: 'before' },
          ],
        },
      },
    },
  },
    
  // If you need specify custom settings for ESLint
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }
)
```

```json [tsconfig.json]
{
  "files": [
    "eslint.config.js",     // important!
    "stylelint.config.cjs"  // if you use stylelint
  ],
  "compilerOptions": {
    "checkJs": true         // important!
    ...
  }
}
```

```json [tsconfig.vue.json]
{
  "files": [
    "eslint.config.js",      // important!
    "stylelint.config.cjs",  // if you use stylelint
    "**/*.vue"               // important!
  ],
  "compilerOptions": {
    "checkJs": true         // important!
    ...
  }
}
```
:::