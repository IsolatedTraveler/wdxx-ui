export function DATE(v: string) {
  if (v) {
    return `std('${v}')`
  }
  return 'sysdate'
}