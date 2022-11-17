import { resolve } from "path";
// 项目位置
export const projRoot = resolve(__dirname, "..", "..", "..");

// 开发源位置
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, 'components')
export const localeRoot = resolve(pkgRoot, "locale");
export const epRoot = resolve(pkgRoot, "ui");
export const epPackage = resolve(epRoot, "package.json");

// 构建工具位置
export const buildRoot = resolve(projRoot, "build");

// 结果输出位置
export const buildOutput = resolve(projRoot, "dist");
export const epOutput = resolve(buildOutput, "ui");
