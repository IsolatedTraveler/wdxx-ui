import { resolve } from "path";
// 公共参数
export const uiFileName = 'z-ui'
// 项目位置
export const projRoot = resolve(__dirname, "..", "..", "..");
// 开发源位置
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, 'components')
export const epRoot = resolve(pkgRoot, uiFileName);
export const stylesRoot = resolve(pkgRoot, "styles/src");
export const stylesModuleRoot = resolve(stylesRoot, "mod");
export const epPackage = resolve(epRoot, "package.json");
export const hooksRoot = resolve(pkgRoot, "hooks/use-provide");

// 构建工具位置
export const buildRoot = resolve(projRoot, "build/def");

// 结果输出位置
export const buildOutput = resolve(projRoot, "dist");
export const epOutput = resolve(buildOutput, "ui");