import path from "path";
import type { ModuleFormat } from "rollup";
import { epOutput } from "./path";
import { compilerOptions } from '../../../tsconfig.base.json'
export const target = compilerOptions.target;
export const PKG_GROUP = "@ui";
export const PKG_PREFIX = "z";
export const PKG_NAME = "z-uis";
export const PKG_CAMELCASE_NAME = "ZUis";
export const PKG_CAMELCASE_LOCAL_NAME = "ZUisLocale";
export const PKG_BRAND_NAME = "Z Uis";
export const themeChalk = "styles"
export const CSS_PATH = './mod/'

export const modules = ["esm", "cjs"] as const;
export interface BuildInfo {
  module: "ESNext" | "CommonJS";
  format: ModuleFormat;
  ext: "mjs" | "cjs" | "js";
  output: {
    name: string;
    path: string;
  };

  bundle: {
    path: string;
  };
}
export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: "ESNext",
    format: "esm",
    ext: "mjs",
    output: {
      name: "es",
      path: path.resolve(epOutput, "es"),
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    ext: "js",
    output: {
      name: "lib",
      path: path.resolve(epOutput, "lib"),
    },
    bundle: {
      path: `${PKG_NAME}/lib`,
    },
  },
};

export type Module = typeof modules[number];
export type BuildConfig = typeof buildConfig;
