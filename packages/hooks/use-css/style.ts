export function useCssStyle(v: any) {
  if (v) {
    if (isNaN(v)) {
      return v
    } else {
      return v + '%'
    }
  } else {
    return undefined
  }
}