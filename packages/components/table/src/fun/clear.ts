import { ThCol } from "./getCols";

export function claerFixed(keys: Array<ThCol>) {
  keys.forEach(it => {
    if (it._thTdStyle) {
      it._thTdStyle.right = undefined
      it._thTdStyle.left = undefined
    }
  });
}