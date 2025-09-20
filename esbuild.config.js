import esbuild from 'esbuild'
import fg from 'fast-glob'

const entryPoints = await fg(['src/eslint/**/*.ts', '!src/eslint/type.ts'])

await esbuild.build({
  entryPoints,
  outdir: 'dist/eslint',
  bundle: false,
  splitting: false,
  minify: true,
  format: 'esm',
  platform: 'neutral',
  sourcemap: false,
  drop: ['console', 'debugger'],
  target: 'node22',
  tsconfig: 'tsconfig.json',
})
