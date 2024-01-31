import { PKG_PREFIX } from "@ui/vars";

export function useCssName(name: string) {
  return name ? (PKG_PREFIX + '-' + name) : ''
}