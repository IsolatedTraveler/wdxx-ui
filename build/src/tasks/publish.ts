import { series, parallel } from "gulp";
import { epOutput, run, runTask, withTaskName } from "../../utils";

// 单进程执行任务
export const publish = series(
  // 多进程执行任务
  parallel(
    // 修改版本信息
    runTask("alertVersion"),
    // 生成global.d.ts, component.ts, components.d.ts
    runTask('creatComponent')
    // 生成typings/components.d.ts
  ),
  // 打包
  withTaskName('build', () => run('pnpm run build')),
  // 发布
  withTaskName('npmPublish', () => run('npm publish', epOutput))
);