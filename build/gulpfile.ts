import { series, parallel } from "gulp";
import { mkdir } from 'fs/promises'
import {withTaskName, run, epOutput, runTask, copyFullStyle, copyTypesDefinitions, copyFiles} from './utils'
// 单进程执行任务
export default series(
  // 删除上次打包生成的内容
  withTaskName('clean', () => run('pnpm run clean')),
  // 创建打包后输出目录
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  // 多进程执行任务
  parallel(
    // rollup打包并packages中所有文件并输出
    runTask('buildModules'),
    // // rollup单独打包packages/ui
    runTask('buildFullBundle'),
    // 打包生成types(支持typescript,需要在项目根目录下新建tsconfig.web.json)
    runTask('generateTypesDefinitions'),
    // 样式打包
    // series(
    //   withTaskName('buildThemeChalk', () => {
    //     return run('pnpm run -C packages/theme-chalk build')
    //   }),
    //   copyFullStyle
    // )
  ),
  parallel(copyTypesDefinitions, copyFiles)
)
export * from './src'