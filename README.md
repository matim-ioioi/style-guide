# Style Guide (ESLint, Prettier, Stylelint) for web applications

## Introduction

This repository has configurations for ESLint, Prettier, Stylelint

- [ESLint](#eslint)
- [Prettier](#prettier)
- [StyleLint](#stylelint)

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
      graphql: false, // default: false
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
        // For vue if you use it (including .vue files)
        // ATTENTION! For correctly checking and autofixing vue-files by ESLint you need create separately tsconfig-file which can extends your common tsconfig-file
        // but it must have "**/*.vue" in "include" (or "files") parameter
        vue: {
          tsConfigPath: './tsconfig.vue.json',
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

To use Prettier, add this line to `package.json`:
```json
{
  "prettier": "@timmio/style-guide/prettier"
}
```

## StyleLint

To use StyleLint, add the file named `stylelint.config.js`:
```javascript
module.exports = {
  extends: ['@timmio/style-guide/stylelint'],
}
```
