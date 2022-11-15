import { series, parallel } from "gulp";
import { mkdir } from 'fs/promises'
import {withTaskName, run, epOutput, runTask} from './utils'
// 单进程执行任务
export default series(
  // 删除上次打包生成的内容
  withTaskName('clean', () => run('pnpm run clean')),
  // 创建打包后输出目录
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  // 多进程执行任务
  parallel(
    runTask('buildModules')
  )
)
export * from './src'