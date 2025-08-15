# Style Guide (ESLint, Prettier, Stylelint, TypeScript) for web applications

## Introduction

This repository has configuration files for Prettier, Stylelint, TypeScript (tsconfigs) and out-of-the-box configuration for ESLint (including required dependencies)

- [ESLint](#eslint)
- [Prettier](#prettier)
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

## ESLint

> Note: ESLint is in the project dependencies, so there is no need to install it separately

To use ESLint, add the file named `eslint.config.js` to your project root:

<details><summary>Example of ESLint configuration</summary>

```javascript
import { createESLintConfigs } from '@timmio/style-guide/eslint'

export default createESLintConfigs(
    {
      // Add ignore paths
      ignore: [/* YOUR ADDITIONAL IGNORE PATHS */],
      // Add browser environment
      browser: true, // default: true
      // Add node environment
      node: true, // default: true
      // Add graphql linting
      graphql: true, // default: true
      // Add vue linting
      vue: true, // default: true
      // You can add custom pathGroups for ordering imports
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
      // You must provide paths to tsconfigs
      tsConfigs: {
        // For script (including .{js,mjs,cjs,jsx and ts,mts,cts,tsx} files)
        script: {
          tsConfigPath: './tsconfig.json',
          tsConfigRootDir: import.meta.dirname,
        },
        // For vue (including .vue files) (if you use vue)
        vue: {
          tsConfigPath: './tsconfig.eslint.json',
          tsConfigRootDir: import.meta.dirname,
        },
        // For your additional cases (for example use other tsconfig for server directory)
        extraConfigs: [
          {
            files: ['./src/server/*.{js,ts}', './src/server/**/*.{js,ts}'],
            tsConfigPath: './src/server/tsconfig.json',
            tsConfigRootDir: import.meta.dirname,
          },
        ],
      },
    },
    // You can add extra configs
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    }
)
```
</details>

**Your tsconfigs also must have `"eslint.config.js"` in `"include"` option:**
```json
{
  "include": ["eslint.config.js", ...]
}
```

## Prettier

> Note: Prettier is in the project dependencies, so there is no need to install it separately

To use Prettier, add this line to `package.json`:
```json
{
  "prettier": "@timmio/style-guide/prettier"
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

> Attention! (limitation `ts-node` (bug with extending and exports))\
> You must specify a relative path if your tsconfig.json placement is not root of a project (or root tsconfig has name not equal to "tsconfig.json")\
> For example:
```json
{
  "extends": "../../node_modules/@timmmio/style-guide/src/typescript/tsconfig.server.json"
}
```
