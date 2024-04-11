import type { ProjectManifest } from "@pnpm/types";
import { PKG_NAME, PKG_GROUP, buildConfig, Module, themeChalk } from "../var";

export const excludeFiles = (files: string[]) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

export const getPackageManifest = (pkgPath: string):Promise<ProjectManifest> => {
  return import(pkgPath);
};

export const getPackageDependencies = (
  pkgPath: string
): Promise<Record<"dependencies" | "peerDependencies", string[]>> => {
  return getPackageManifest(pkgPath).then(manifest => {
    const { dependencies = {}, peerDependencies = {} } = manifest;
    return {
      dependencies: Object.keys(dependencies),
      peerDependencies: Object.keys(peerDependencies),
    };
  });
};
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]
  return (id: string) => {
    id = id.split(`${PKG_GROUP}/${themeChalk}`).join(`${PKG_NAME}/${themeChalk}`)
    id = id.split(`${PKG_GROUP}/`).join(`${config.bundle.path}/`)
    return id
  }
}