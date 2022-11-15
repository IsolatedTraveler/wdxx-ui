import { resolve } from 'path'
export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const buildRoot = resolve(projRoot, 'build')
export const buildOutput = resolve(projRoot, 'dist')
export const epOutput = resolve(buildOutput, 'wdxx-ui')