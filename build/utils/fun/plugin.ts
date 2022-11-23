import { PKG_NAME, PKG_GROUP, themeChalk } from "../var";
import type { Plugin } from "rollup";
const sourceThemeChalk = `${PKG_GROUP}/${themeChalk}` as const;
const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const;
export function UiPlusAlias(): Plugin {
  return {
    name: "ui-plus-alias-plugin",
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.split(sourceThemeChalk).join(bundleThemeChalk),
        external: "absolute"
      }
    }
  }
}
