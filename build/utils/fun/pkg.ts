import type { ProjectManifest } from "@pnpm/types";
import { PKG_NAME, PKG_GROUP, buildConfig, Module, themeChalk } from "../var";

export const excludeFiles = (files: string[]) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

export const getPackageManifest = (pkgPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(pkgPath) as ProjectManifest;
};

export const getPackageDependencies = (
  pkgPath: string
): Record<"dependencies" | "peerDependencies", string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]
  return (id: string) => {
    id = id.split(`${PKG_GROUP}/${themeChalk}`).join(`${PKG_NAME}/${themeChalk}`)
    id = id.split(`${PKG_GROUP}/`).join(`${config.bundle.path}/`)
    return id
  }
}