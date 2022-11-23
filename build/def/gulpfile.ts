import { series, parallel } from 'gulp'
import { mkdir } from 'fs/promises'
import {withTaskName, run, epOutput, runTask} from '@ui/build-utils'
export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions')
  )
)
export * from './tasks'