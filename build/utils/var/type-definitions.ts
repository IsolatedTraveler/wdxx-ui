import type { CompilerOptions } from 'ts-morph'
import path from 'path'

import { buildOutput, projRoot } from './path'

const outDir = path.resolve(buildOutput, 'types')
export const compilerOptions: CompilerOptions = {
  declaration: true,
  emitDeclarationOnly: true,
  noEmitOnError: true,
  allowJs: false,
  outDir,
  baseUrl: projRoot,
  preserveSymlinks: true,
  skipLibCheck: true,
  noImplicitAny: false
}