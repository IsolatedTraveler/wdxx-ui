import type { OutputOptions, RollupBuild } from "rollup";
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import VueMacros from "unplugin-vue-macros/rollup";
import { UiPlusAlias } from "./plugin";
import {target} from "../var";

import { epPackage } from "../var";
import { getPackageDependencies } from "./pkg";

export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage);

  return (id: string) => {
    const packages: string[] = peerDependencies;
    if (!options.full) {
      packages.push("@vue", ...dependencies);
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)));
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? ".min" : ""}.${ext}`;
}
export const creatRollup = async (input:any, plugin:any, buildConfig:any) => {
  const plugins = [
    UiPlusAlias(),
    VueMacros({
      version: 3,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      },
      setupComponent: false,
      setupSFC: false
    }),
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".ts"],
    }) as any,
    commonjs(),
    esbuild({
      sourceMap: false,
      target,
      loaders: {
        ".vue": "ts"
      },
      treeShaking: true,
      legalComments: 'eof'
    })
  ]
  if (plugin) {
    plugin.push(...plugin)
  }
  const bundle = await rollup({
    input,
    plugins,
    external: await generateExternal({ full: false }),
    treeshake: true
  });
  // rollup打包内容输出
  await writeBundles(
    bundle,
    buildConfig
  )
}
