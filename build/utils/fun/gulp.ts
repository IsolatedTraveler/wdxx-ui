import { buildRoot } from "../var";
import { run } from "./process";

import type { TaskFunction } from "gulp";

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });

export const runTask = (name: string) => {
  return withTaskName(`shellTask:${name}`, () => {
    return run(`pnpm run start ${name}`, buildRoot);
  });
};
