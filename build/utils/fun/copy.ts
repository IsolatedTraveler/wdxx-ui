import { copyFile, mkdir } from "fs/promises";
import fs from "fs-extra";
import path from "path";
import type { TaskFunction } from "gulp";
import { parallel } from "gulp";

import {
  epOutput,
  buildOutput,
  buildConfig,
  Module,
  epPackage,
  projRoot,
} from "../var";
import { withTaskName } from "./gulp";

export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, "dist"), { recursive: true });
  await copyFile(
    path.resolve(epOutput, "theme-chalk/index.css"),
    path.resolve(epOutput, "dist/index.css")
  );
};

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, "types", "packages");
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () => {
      return fs.copy(src, buildConfig[module].output.path, { recursive: true });
    });
  return parallel(copyTypes("esm"), copyTypes("cjs"))(done);
};

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, "package.json")),
    copyFile(
      path.resolve(projRoot, "README.md"),
      path.resolve(epOutput, "README.md")
    ),
    copyFile(
      path.resolve(projRoot, "global.d.ts"),
      path.resolve(epOutput, "global.d.ts")
    ),
  ]);
