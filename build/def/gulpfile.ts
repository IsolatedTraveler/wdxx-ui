import { series, parallel } from 'gulp'
import { mkdir } from 'fs/promises'
import {withTaskName, run, epOutput, runTask, copyTypesDefinitions, copyFiles, copyFullStyle} from '@ui/build-utils'
export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/styles build')
      ),
      copyFullStyle
    )
  ),
  parallel(copyTypesDefinitions, copyFiles)
)
export * from './tasks'