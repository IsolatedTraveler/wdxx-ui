export function strToUrl(str: string, type: string) {
  return URL.createObjectURL(new Blob([str], { type }))
}