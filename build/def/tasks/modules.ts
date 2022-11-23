import glob from "fast-glob";
import type { OutputOptions } from "rollup";
import {excludeFiles,pkgRoot,epRoot,buildConfigEntries, creatRollup} from "@ui/build-utils";

export const buildModules = async () => {
  // 获取包中有效文件
  const input = excludeFiles(
    await glob("**/*.{js,ts,vue,tsx,jsx}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  );
  const out = buildConfigEntries.map(([module, config]): OutputOptions => {
    return {
      format: config.format,
      dir: config.output.path,
      exports: module === "cjs" ? "named" : undefined,
      preserveModules: true,
      preserveModulesRoot: epRoot,
      sourcemap: false,
      entryFileNames: `[name].${config.ext}`
    }
  })
  await creatRollup(input, [], out)
}
