import { CwglZddbLx } from "../../use.arr";
import { CwglTablCol } from "./tableCol";
export type { CwglZddbLx } from "../../use.arr";
export type CwglZddbMbs = {
  [key in CwglZddbLx]: CwglTablCol[];
};