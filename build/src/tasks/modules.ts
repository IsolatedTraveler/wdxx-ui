import glob from "fast-glob";
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import VueMacros from "unplugin-vue-macros/rollup";
import type { OutputOptions } from "rollup";
import {
  excludeFiles,
  pkgRoot,
  epRoot,
  target,
  generateExternal,
  writeBundles,
  buildConfigEntries,
} from "../../utils";
import { UiPlusAlias } from "../plugins/element-plus-alias-plugin";

export const buildModules = async () => {
  // 获取包中有效文件
  const input = excludeFiles(
    await glob("**/*.{js,ts,vue}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
  // rollup打包所有内容
  const bundle = await rollup({
    input,
    plugins: [
      UiPlusAlias(),
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false
          }),
          vueJsx: vueJsx()
        }
      }),
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }) as any,
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          ".vue": "ts",
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  });
  // rollup打包内容输出
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === "cjs" ? "named" : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      };
    })
  );
};
