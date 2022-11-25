import { series } from "gulp";
import { epOutput, run, runTask, withTaskName } from "@ui/build-utils";

// 单进程执行任务
export const publish = series(
  // 打包
  withTaskName('build', () => run('pnpm run build')),
  // 发布
  // withTaskName('npmPublish', () => run('npm publish', epOutput)),
  // 修改版本信息
  runTask('alertVersion')
)