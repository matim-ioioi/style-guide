# Style Guide (ESLint, Prettier, Stylelint, TypeScript) for web applications

## Introduction

This repo have configuration files for Prettier, Stylelint, TypeScript (tsconfigs) and out-of-the-box configuration for ESLint (including required dependencies)

- [Prettier](#prettier)
- [ESLint](#eslint)
- [StyleLint](#stylelint)
- [TypeScript](#typescript)

## Installing

npm:
```shell
npm install @timmio/style-guide --save-dev
```
---
yarn:
```shell
yarn add @timmio/style-guide --dev
```
---
pnpm:
```shell
pnpm add @timmio/style-guide --dev
```

## Prettier

> Note: Prettier is in the project dependencies, so there is no need to install it separately

To use Prettier, add this line to `package.json`:
```json
{
  "prettier": "@timmio/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is in the project dependencies, so there is no need to install it separately

To use ESLint, add the file named `eslint.config.mjs` to your project root:

<details><summary>Full ESLint config (including JS, TS, Vue, GQL)</summary>

```javascript
import styleGuideEslintConfigs from '@timmio/style-guide/eslint'
import { browserConfig } from '@timmio/style-guide/eslint/browser'
import { nodeConfig } from '@timmio/style-guide/eslint/node'
import typescriptEslint from 'typescript-eslint'

// tsconfig for client-side for example
const TSCONFIG = './tsconfig.json'

// tsconfig for server-side for example
const TSCONFIG_SERVER = './src/server/tsconfig.json'

export default typescriptEslint.config(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    browserConfig,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    nodeConfig,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    styleGuideEslintConfigs,
    {
      files: ['*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}', '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG,
          },
        },
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG,
          },
          vue: {
            project: TSCONFIG,
          },
        },
      },
    },
    {
      files: ['./src/server/*.{js,ts}', './src/server/**/*.{js,ts}'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG_SERVER,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG_SERVER,
          },
        },
      },
    },
    {
      files: ['*.{gql,graphql}', '**/*.{gql,graphql}'],
      languageOptions: {
        parserOptions: {
          graphQLConfig: {
            schema: './src/client/app/graphql/federation/schema.graphql',
            documents: './src/**/*.{gql,graphql}',
            operations: './src/**/*.{gql,graphql}',
          },
        },
      },
    }
)
```
</details>

<details><summary>Partial configs usage</summary>

```javascript
import { browserConfig } from '@timmio/style-guide/eslint/browser'
import { baseConfigs } from '@timmio/style-guide/eslint/base'
import { nodeConfig } from '@timmio/style-guide/eslint/node'
import { commentsConfigs } from '@timmio/style-guide/eslint/comments'
import { graphqlConfigs } from '@timmio/style-guide/eslint/graphql'
import { importConfigs } from '@timmio/style-guide/eslint/import'
import { tsConfigs } from '@timmio/style-guide/eslint/typescript'
import { vueConfigs } from '@timmio/style-guide/eslint/vue'
import typescriptEslint from 'typescript-eslint'

// tsconfig for client-side for example
const TSCONFIG = './tsconfig.json'

// tsconfig for server-side for example
const TSCONFIG_SERVER = './src/server/tsconfig.json'

export default typescriptEslint.config(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    browserConfig, // if need
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    nodeConfig, // if need
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    commentsConfigs, // if need
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    graphqlConfigs, // if you use graphql
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    importConfigs, // if need
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    tsConfigs, // if need
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- typescriptEslint.config conflict types
    vueConfigs, // if you use vue
    {
      files: ['*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}', '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG,
          },
        },
      },
    },
    // if you use vue
    {
      files: ['*.vue', '**/*.vue'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG,
          },
          vue: {
            project: TSCONFIG,
          },
        },
      },
    },
    {
      files: ['./src/server/*.{js,ts}', './src/server/**/*.{js,ts}'],
      languageOptions: {
        parserOptions: {
          project: TSCONFIG_SERVER,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        'import-x/resolver-next': {
          typescript: {
            project: TSCONFIG_SERVER,
          },
        },
      },
    },
    // if you use graphql
    {
      files: ['*.{gql,graphql}', '**/*.{gql,graphql}'],
      languageOptions: {
        parserOptions: {
          graphQLConfig: {
            schema: './src/client/app/graphql/federation/schema.graphql',
            documents: './src/**/*.{gql,graphql}',
            operations: './src/**/*.{gql,graphql}',
          },
        },
      },
    }
)
```
</details>

**Your tsconfigs also must have `"eslint.config.mjs"` in `"include"` option:**
```json
{
  "include": ["eslint.config.mjs", ...]
}
```

## StyleLint

> Note: StyleLint is in the project dependencies, so there is no need to install it separately

To use StyleLint, add the file named `stylelint.config.js`:
```javascript
module.exports = {
  extends: ['@timmio/style-guide/stylelint'],
}
```

## TypeScript

> Note: TypeScript is in the project dependencies, so there is no need to install it separately

To use TypeScript configs (tsconfig's), you can extend your `tsconfig`-files:
```json
{
  "extends": "@timmio/style-guide/typescript/..."
}
```

This repo have several configs for TypeScript:

| Can use for | Config path                                           |
|-------------|-------------------------------------------------------|
| Client-side | `@timmio/style-guide/typescript/tsconfig.client.json` |
| Server-side | `@timmio/style-guide/typescript/tsconfig.server.json` |

> Attention! (limitation `ts-node` (bug with extends and exports))\
> You must specify a relative path if your tsconfig.json placement is not root of project (or root tsconfig has name not equal to "tsconfig.json")\
> For example:
```json
{
  "extends": "../../node_modules/@timmmio/style-guide/src/typescript/tsconfig.server.json"
}
```
