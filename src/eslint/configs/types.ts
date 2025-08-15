export type Context = {
  browser: boolean
  node: boolean
  graphql: boolean
  vue: boolean
  tsConfigs?: TypeScriptConfigsOption
}

export type TypeScriptConfig = {
  files?: string[]
  tsConfigPath: string
  tsConfigRootDir: string
}

export type TypeScriptConfigsOption = {
  script: Omit<TypeScriptConfig, 'files'>
  vue?: Omit<TypeScriptConfig, 'files'>
  extraConfigs?: TypeScriptConfig[]
}

export type CreateESLintConfigsOptions = {
  ignore?: string[]
  browser?: boolean
  node?: boolean
  graphql?: boolean
  vue?: boolean
  tsConfigs: TypeScriptConfigsOption
  import?: {
    order?: {
      pathGroups?: {
        prepend?: { pattern: string; group: string; position: string }[]
        append?: { pattern: string; group: string; position: string }[]
      }
    }
  }
}
