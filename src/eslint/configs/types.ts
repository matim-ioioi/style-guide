export type Context = {
  browser: boolean
  node: boolean
  graphql: boolean
  vue: VueConfigsOption
  tsConfigs: TypeScriptConfigsOption
  testing?: TestingConfigsOption
}

export type TypeScriptConfig = {
  files?: string[]
  tsConfigPath: string
  tsConfigRootDir: string
  projectService?: boolean
}

export type VueConfigsOption = { useTemplateTypeScriptParser?: boolean } | boolean

export type TypeScriptConfigsOption = {
  script: Omit<TypeScriptConfig, 'files'>
  vue?: Omit<TypeScriptConfig, 'files'>
  extraConfigs?: TypeScriptConfig[]
}

export type TestingConfigsOption = {
  paths?: string[]
}

export type CreateESLintConfigsOptions = {
  ignore?: string[]
  browser?: boolean
  node?: boolean
  graphql?: boolean
  vue?: VueConfigsOption
  tsConfigs: TypeScriptConfigsOption
  testing?: TestingConfigsOption
  import?: {
    order?: {
      pathGroups?: {
        prepend?: { pattern: string; group: string; position: string }[]
        append?: { pattern: string; group: string; position: string }[]
      }
    }
  }
}
