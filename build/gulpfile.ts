import { series, parallel } from "gulp";
import { mkdir } from "fs/promises";
import {
  withTaskName,
  epOutput,
  runTask,
  copyTypesDefinitions,
  copyFiles,
  run,
  copyFullStyle,
} from "./utils";
// 单进程执行任务
export default series(
  // 创建打包后输出目录
  withTaskName("createOutput", () => mkdir(epOutput, { recursive: true })),
  // 多进程执行任务
    runTask("buildModules"),
  // parallel(
  //   // rollup打包并packages中所有文件并输出
  //   runTask("buildModules"),
  //   // // rollup单独打包packages/ui
  //   runTask("buildFullBundle"),
  //   // 打包生成types(支持typescript,需要在项目根目录下新建tsconfig.web.json)
  //   runTask("generateTypesDefinitions")
  //   // 样式打包
  //   ,series(
  //     withTaskName('buildThemeChalk', () => {
  //       return run('pnpm run -C packages/theme build')
  //     }),
  //     copyFullStyle
  //   )
  // ),
  // parallel(copyTypesDefinitions, copyFiles)
) as any
export * from "./src";
